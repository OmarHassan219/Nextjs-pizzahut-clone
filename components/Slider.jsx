import React,{useState} from 'react'
import {GrClose} from 'react-icons/gr'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'
const Slider = ({open,setopen}) => {
    const [list, setlist] = useState(true)
    const handleClick =(e)=>{
        document.querySelectorAll('.options .opt').forEach((option) =>{
           option.classList.remove("active")
           e.target.classList.add("active")
           

        })
    }
  return (
   <div className={open ? "slider open":'slider'}>
<div className='heading'>
  <Link  href={'/'}><a><Image onClick={() => setopen(false)} src="/pizzahut-desktop-logo.svg" alt="me" width="150" height="37.09" style={{cursor:'pointer'}} /></a></Link>
  <GrClose className='close' onClick={()=>setopen(false)} />
</div>
<div className='options' onClick={(e) => handleClick(e)} >
<p className='active opt'>Welcome</p>
<p className='opt'>Sign In</p>
<p className='opt' >Register</p>
<p  onClick={() => setlist(!list)} style={{borderTop:"1px solid #777",borderBottom:"1px solid #777"}}>Menu-List  <IoIosArrowDropdownCircle style={{float:"right",fontSize:"22px",marginRight:"5px",color:"#ff0000"}}/></p>
{list &&
<div className='menu-options' style={{backgroundColor:'rgb(119 119 119 / 11%)',cursor:'pointer'}}>
<Link  href={'/deals'}><p>Deals</p></Link>
<Link  href={'/meal For 1'}><p>Meals For 1</p></Link>
<Link  href={'/sharing Meals'}><p>Sharing Meals</p></Link>
<Link  href={'/starters'}><p>Starters</p></Link>
<Link  href={'/pizza'}><p>Pizza</p></Link>
<Link  href={'/pasta'}><p>Pasta</p></Link>
<Link  href={'/desserts'}><p>Desserts</p></Link>
<Link  href={'/drinks'}><p>Drinks</p></Link>
</div>
}
<p className='opt' >Covid-19 Measures</p>
</div>
<p style={{textAlign:"center" , color:"#ff0000",fontWeight:"bold"}} className='contact'>Contact Us Omar & Khalid </p>
<p style={{textAlign:"center" ,fontWeight:"bold"}}> &copy; 2020 Pizza-hut </p>
</div>
  )
}

export default Slider