import React,{useEffect,useState,useContext} from 'react'
import { client, urlFor } from '../lib/client'
import Image from 'next/image'
import {FaUser} from 'react-icons/fa'
import {BsBasket3, BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import Swal from 'sweetalert2'
import { Banner, LocationCard ,MobileNav,Slider,Mobilebanner, Footer} from '../components/Index'
import Link from 'next/link'
import { Context } from '../context/StateContext'

const index = ({bannerData}) => {
  const context = useContext(Context)
  const {active,setactive,open,setopen} =context
  const{image,name} = bannerData[0]
    const [close, setclose] = useState(false)
   const [fire,setfire] = useState(true)
  const handlescroll =()=>{
    
    const y = window.scrollY
    if(y >315){
      document.querySelector('.nav').classList.add('scroll')
    }
    else{
      document.querySelector('.nav').classList.remove('scroll')
    }
  }

  useEffect(() => {
    
     window.addEventListener('scroll',handlescroll )




  
    return () => {
      window.removeEventListener('scroll',handlescroll )
    }
  }, [])
  if(fire){
Swal.fire({
  title: 'Hurry Up!',
  text: 'Apply "code20" for 20% off on order price',
  imageUrl: 'https://img.freepik.com/free-vector/20-off-particle-sale-discount-banner-discount-offer-price-tag-vector-modern-sticker-illustration_460848-6538.jpg?w=1380&t=st=1664706614~exp=1664707214~hmac=6086d7ab5a39e78c5204a3114082d8b52c0c1c906c9894a1489211628aaebd90',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: '20% off ',
})
setfire(false)
  }
  return (
    <>
    <div className='large-screen'>
    <div className='nav'>
      <Link href={'/'}><a><Image src="/pizzahut-desktop-logo.svg" alt="me" width="150" height="37.09" style={{cursor:'pointer'}} /></a></Link>

<div >
<p><FaUser /> Sign In / Register </p>
<BsBasket3 className='basket' />
</div>
    </div>
    <div className='banner-container'>

    <Banner bannerData={bannerData[0]} />
   <LocationCard setactive={setactive} active={active}  />
    </div>
    <div className='container'>
      <div className='alldeals'>
   <hr />
<p> Our Most Popoular Deals</p>
<img src={urlFor(image && image[1])}  width="800" height="300"/>
<Link href={'/deals'}><button type='button'>View All Deals</button></Link>

      </div>

    </div>
    <Footer/>
    
    
    </div>
    <div className='md-sm'>

<MobileNav open={open} setopen={setopen}/>
<Slider open={open} setopen={setopen}/>
<div className='location' onClick={() => setclose(true)}>
<span className={!active ? 'active' : null} onClick={() => setactive(false)}>Delivery</span>
<span className={active ? 'active' : null} onClick={() => setactive(true)}>Pick Up</span>
</div>
{close &&
<div className='showlocation'>
  <AiFillCloseCircle className='close-loc' onClick={() => setclose(false)}/>
<LocationCard active={active} setactive={setactive}/>
</div>
}
<Mobilebanner/>
<div style={{textAlign:'center'}}>
<img src={urlFor(image && image[1])}  style={{width:'80%' , height:"200px",margin:"50px 0",borderRadius:'10px'}}/>
</div>
    <Footer/>

    </div>
    </>
  )
}

export const getServerSideProps = async() => {


const bannerQuery = '*[_type == "banner"]'
const bannerData = await client.fetch(bannerQuery)

return { 

  props:{ bannerData}

}

}





export default index