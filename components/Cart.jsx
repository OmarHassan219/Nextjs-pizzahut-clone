import React,{useContext,useEffect,useRef,useState} from 'react'
import { Context } from '../context/StateContext'
import {AiFillCloseCircle} from 'react-icons/ai'
import getStripe from '../lib/getStripe'
import {toast} from 'react-hot-toast'
import {BsArrowLeft} from 'react-icons/bs'








const Cart = () => {











  const context = React.useContext(Context)
  const {cartItems,removeItem,setremoveItem,removedItemIndex, setremovedItemIndex,totalPrice,dicountedPrice,setdicountedPrice,settotalPrice,applied,handleDiscount,discount,setapplied}=context




const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }





const handleCartClose =()=>{

document.querySelector('.cart').classList.remove('slide')


}


  const handleRemove = (i)=>{
    setremoveItem(!removeItem)
    setremovedItemIndex(i)
    
  }

const inputRef = React.useRef()
useEffect(() => {
  if(applied)
    inputRef.current.value = "20% applied"
  

  
}, [applied])

console.log(cartItems)

  return (
    <div className='cart'>
      <BsArrowLeft onClick={handleCartClose} className='mobile-exit'/>
  <p className='cart-title'>your cart</p>
{cartItems.length ? <div className='your-order'>
 {cartItems.map((meal,i)=>(
  <div key={i}>
  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
<h4>{meal.name}</h4>
<span >{meal.price} AED</span>
<AiFillCloseCircle onClick={()=>handleRemove(i)} style={{color:'#777',fontSize:'20px',cursor:"pointer"}}/>
</div>
{meal.opt?.map((choice,i)=>(
  <div key={i} className='meal-opt'>
  {meal.addon && i+1 == meal.opt.length ?<p style={{display:'flex' ,justifyContent:'space-between'}}>- {choice} <span >+{meal.addon} AED</span></p> :<p>- {choice}</p>}
  
</div>

))}
{cartItems.length > 1 ? <hr/> :''}
</div>
))} 


</div>:<p style={{fontSize:"20px" , color:'black',fontWeight:'bold'}}>Our Preheated oven is waiting for your order , Order Now!!</p>}
 {cartItems.length ?  <div className='totalprice'>
  <form style={{textAlign:'center',backgroundColor:'white'}}>
    <input ref={inputRef} placeholder='Discount code?' type="text" name="code" style={{padding:'5px',border:'none',backgroundColor:'rgb(200 183 183)',borderRadius:"10px",marginRight:'5px',color:'black',fontWeight:'bold'}} />
    <input onClick={()=>handleDiscount(inputRef.current.value)} type="button" value="Apply" style={{backgroundColor:"green",color:"white" , padding:'6px',cursor:'pointer',border:'none',borderRadius:"10px"}} />
  </form>
<p>Price = {applied? totalPrice-totalPrice*0.2 :totalPrice} AED</p>
<p>+ VAT = {applied ?((totalPrice-totalPrice*0.2)*0.05).toFixed(1) :(totalPrice*0.05).toFixed(1)} AED</p>
<p style={{color:'black',fontWeight:'bold'}}>Total Price = {applied? ((totalPrice-totalPrice*0.2)+parseFloat(((totalPrice-totalPrice*0.2)*0.05).toFixed(1))).toFixed(1):(totalPrice + parseFloat((totalPrice*0.05).toFixed(1))).toFixed(1) } AED</p>
<input className='pay' onClick={handleCheckout} type="button" value="Checkout" />

</div>:''}

    </div>
  )
}

export default Cart