import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1LnoADIcudDUa3motEAqLrzL' },
        ],
        line_items: req.body.map((item) => {
          const img = item.image.asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/op6nxc0p/production/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'aed',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled:false,
              
            },
            quantity: 1
          }
        }),
        success_url: `${req.headers.origin}/deals`,
        cancel_url: `${req.headers.origin}/deals`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}