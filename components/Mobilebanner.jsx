import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';

import { Autoplay, Pagination } from "swiper";
const Mobilebanner = () => {
  return (
    <>
         <Swiper  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]} className="mySwiper">
            <SwiperSlide><p><Image  src="/mobile app.jpg" alt="me" width="150" height="37.09" /></p></SwiperSlide>
            <SwiperSlide><p><Image  src="/banner.jpg" alt="me" width="150" height="37.09" /></p></SwiperSlide>
            <SwiperSlide><p><Image  src="/banner2.jpg" alt="me" width="150" height="37.09" /></p></SwiperSlide>
        

</Swiper>
<div className='categories'>
    <Link href={'/pizza'}><a className='large'>
    <Image src="/pizza.png" alt="me" width="224.8" height="80" style={{cursor:'pointer'}} />
    <p>Pizza</p>
</a>
</Link>
<Link href={'/dessert'}><a className='md1'>
    <Image src="/strawberry-cheesecake9783.png" alt="me" width="112" height="80" style={{cursor:'pointer'}} />
    <p>desserts</p>

</a>
</Link>
<Link href={'/pasta'}><a className='md2'>
    <Image src="/Veg Pasta.jfif" alt="me" width="112" height="80" style={{cursor:'pointer'}} />
    <p>pasta</p>

</a>
</Link>
<Link href={'/deals'}><a className='img-deal'>
    <Image src="/dealls.jpeg" alt="me" width="224.8" height="80" style={{cursor:'pointer'}} />
    <p>deals</p>
</a>
</Link>


</div>
</>
    
  )
}

export default Mobilebanner