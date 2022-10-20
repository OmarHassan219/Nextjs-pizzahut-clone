import React,{useState} from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

import Link from 'next/link'
const Footer = () => {
    const [hover, sethover] = useState(false)
  return (
    <footer>
     <div  className='container' >
      <div className='links'>
             <div className='menu'>
              <h6> menu </h6>
             
              <Link href={`/deals`} ><p>Deals</p></Link>
              <Link href={'/meal for 1'}><p>Meal For 1</p></Link>
              <Link href={'/sharing meals'}><p>Sharing Meals</p></Link>
              <Link href={'/starters'}><p>Starters</p></Link>
              <Link href={'/pizza'}><p>Pizza</p></Link>
              <Link href={'/pasta'}><p>Pasta</p></Link>
              <Link href={'/desserts'}><p>Desserts</p></Link>
              <Link href={'/drinks'}><p>Drinks</p></Link>
              </div> 
              <div className='twos'>
                <div >
                <h6>nutrition</h6>
                <Link href={'/'} ><p>nutrition</p></Link>
                </div>
                <div >
                <h6>customer services</h6>
                <Link href={'/'} ><p>Contact Us</p></Link>
                <Link href={'/'} ><p>FAQs</p></Link>
                <Link href={'/'} ><p>COVID-19 Measures</p></Link>
                </div>
              </div>
              <div className='twos'>
                <div >
                <h6>about us</h6>
                <Link href={'/'} ><p>About us</p></Link>
                <Link href={'/'} ><p>careers</p></Link>
                </div>
                <div >
                <h6>my account</h6>
                <Link href={'/'} ><p>Sign in</p></Link>
                <Link href={'/'} ><p>Create Your Account</p></Link>
                <Link href={'/'} ><p>My Account</p></Link>
                </div>
              </div>
              <div className='twos'>
                <div >
                <h6>privacy policy</h6>
                <Link href={'/'} ><p>privacy policy</p></Link>
                
                </div>
                <div >
                <h6>policies</h6>
                <Link href={'/'} ><p>Terms & Conditions</p></Link>
              
                </div>
              </div>
              <div className='media'>
                <h6>Follow us</h6>
                <div className='media-icons'>
                  <a href=''>  <BsFacebook className='face'/></a>
                  <a href=''>  
                  <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
       <stop stopColor="#405DE6" offset="0%" />
       <stop stopColor="#5851DB" offset="10%" />
       <stop stopColor="#833AB4" offset="20%" />
       <stop stopColor="#C13584" offset="30%" />
       <stop stopColor="#E1306C" offset="40%" />
       <stop stopColor="#FD1D1D" offset="50%" />
       <stop stopColor="#F56040" offset="60%" />
       <stop stopColor="#F77737" offset="70%" />
      <stop stopColor="#FCAF45" offset="80%" />
      <stop stopColor="#FFDC80" offset="90%" />
       </linearGradient>
               </svg>

                  
                  
                  
                      <BsInstagram onMouseEnter={() => sethover(true)} 
                      onMouseLeave={() => sethover(false)} style={ hover ? { fill: "url(#blue-gradient)" } : null} />
                      
                      
                      
                      </a>
                  <a href=''><BsTwitter className='twit'/></a>
                  <a href=''><BsYoutube className='you'/></a>
                 
                  
                   
                   
                </div>
              </div>

</div>
<div className='footerconc'>

  <p>
    Crust availability, prices, participation, delivery areas and charges, and minimum purchase requirements for delivery may vary. Additional charge for extra cheese may apply.
</p> 

 <p>
  ©Pizza Hut, Inc. All rights reserved. The Pizza Hut name, logos and related marks are trademarks of Pizza Hut, Inc.
  </p>  
  <p>
    PEPSI, PEPSI-COLA, PEPSI MAX and the Pepsi Globe are registered trademarks of PepsiCo, Inc.



    </p>
    <strong style={{color:'#FF0000'}}>Made by Omar <span style={{color:'white'}}>&</span> Khalid &copy; 2022</strong>   
</div>
     </div>

    </footer>
  )
}

export default Footer