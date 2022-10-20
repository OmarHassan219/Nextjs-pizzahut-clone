import React,{useState,useContext,useEffect} from 'react'
import Slider from './Slider'
import {GiHamburgerMenu} from 'react-icons/gi'
import Link from 'next/link'
import Image from 'next/image'
import {GrCheckbox} from 'react-icons/gr'
import { useRouter } from 'next/router'
import { Context } from '../context/StateContext'
const MobileNav = ({open,setopen}) => {

const router = useRouter()
const type = router.query.type
const name = router.query.name
const context = React.useContext(Context)
const {cartItems} = context
const handleCart =()=>{
  document.querySelector('.cart').classList.add('slide')
}
useEffect(() => {
  if(!cartItems.length && type && !name){
  document.querySelector('.cart').classList.remove('slide')

  }

  
}, [cartItems])

  return (
   <div className='nav2'>
  <div className='burger'>
<GiHamburgerMenu onClick={() => setopen(true)} className='burger-icon'/>
  </div>
 <Link  href={'/'}><a className="pizza-logo"><Image  src="/mobile logo.png" alt="PizzaHut" width="60" height="50.09" style={{cursor:'pointer'}} /> </a></Link>
 {(type && cartItems.length) ?<div className='box' onClick={handleCart}>
 <GrCheckbox className='cart-box' size={30}/>
 <p className='cartitem-no'>{cartItems.length}</p>
</div>:''}
</div>
  )
}

export default MobileNav