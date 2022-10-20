import React,{useContext,useEffect,useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '../../lib/client'
import  Cart  from '../../components/Cart'
import { Context } from '../../context/StateContext'
import {MdDeliveryDining} from 'react-icons/md'
import {FaCashRegister} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import Router from 'next/router'
import  Card  from '../../components/Card'
import MenuOptions from '../../components/MenuOptions'
import  MobileNav  from '../../components/MobileNav'
import Slider from '../../components/Slider'


const Menu = ({menuoption,alldeals,type}) => {
  const [Loading, setLoading] = useState(false)
  Router.events.on("routeChangeStart",(url) => {
    setLoading(true)
  })
  Router.events.on("routeChangeComplete",(url) => {
    setLoading(false)
  })
  const context = useContext(Context)
  const {active,setactive,removeItem,setremoveItem,removedItemIndex, setremovedItemIndex,cartItems,setcartItems,setshowprice,setappear,setaddedd,open,setopen} = context
  let typesArr =['deals']



useEffect(() => {
setshowprice(false)
setappear(0)
setaddedd(1)
    document.querySelectorAll('.type p').forEach((option) =>{
           option.classList.remove("active")
           if(type === option.innerHTML)
           option.classList.add("active")
           

        })
}, [type])

const handleRemoveItem = ()=>{
  let Itemclone = [...cartItems]
let NewCartItem = Itemclone.filter((item,index)=>{
return !(index === removedItemIndex)

})
setcartItems(NewCartItem)

setremoveItem(!removeItem)
}



  return (
    <div className='large-menu'>
     {Loading &&  <div className='loading'>
<MdDeliveryDining className='location-icon animate '/>
 </div>}
 {removeItem && <div className='removeitem'>
<div className='box'>
  <p>Are you sure you want to remove the item? </p>
  <div >
    <button onClick={() =>setremoveItem(!removeItem) } style={{color:'white',backgroundColor:'#bababa',textAlign:'center',border:'none',padding:'11px',borderRadius:'7px',cursor:'pointer'}} type='button'>Dismiss</button>
    <button onClick={() => handleRemoveItem()} style={{color:'white',backgroundColor:'#70a401',textAlign:'center',border:'none',padding:'11px',borderRadius:'7px',cursor:'pointer'}} type='button'>Confirm</button>
  </div>
</div>



 </div>                    }
<div className='menu-order'>
  
<div className='menu-nav'>
<Link href={'/'}><a><Image src="/pizzahut-desktop-logo.svg" alt="me" width="150" height="37.09" style={{cursor:'pointer'}} /></a></Link>
<div className='mode'>
{!active ? <MdDeliveryDining className='location-icon '/> :<FaCashRegister className='location-icon' /> }
  <p style={{color:'#777' , padding:"0 10px"}}>Mode:{!active ? "Delivery" : "Pick-Up"}</p>
  <p style={{color:'#777' , padding:"0 10px"}}><ImLocation2/> Location: Pizza Hut</p>
<p style={{cursor:'pointer'}}><FaUser /> Sign In / Register </p>

</div>
</div>
<MobileNav open={open} setopen={setopen}/>
<Slider open={open} setopen={setopen}/>
<MenuOptions typesArr={typesArr} alldeals={alldeals} />
<div className='title'>
  
<p>{type}</p>
</div>
<div className='options'>
{menuoption?.length && menuoption.map((option,i) => (

<Card option={option} key={i} type={type}/>

))}
</div>


</div>
<Cart/>

    </div>
  )
}

export const getStaticPaths = async () =>{

const query = `*[_type == "deals"] {type}`
const types = await client.fetch(query)
const paths = types.map((type) => ({

params:{
  type:`${type}`
}


}))
return {
paths,fallback:'blocking'

}

    
}




export const getStaticProps = async ({params:{type}}) => {

const query = `*[_type == "deals" && type == '${type}'  ]`
const all = `*[_type == "deals"]`

const menuoption = await client.fetch(query)
const alldeals = await client.fetch(all)

return{
    props:{menuoption ,alldeals,type}
}




} 


export default Menu