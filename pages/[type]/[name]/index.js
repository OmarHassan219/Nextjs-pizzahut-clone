import React,{useEffect,useReducer,useState,useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router' 
import { Hearts  } from  'react-loader-spinner'
import { client, urlFor } from '../../../lib/client'
import {MdArrowBackIos} from 'react-icons/md'
import {GrPrevious} from 'react-icons/gr'
import {GrNext} from 'react-icons/gr'
import  Card2  from '../../../components/Card2'
import { Context } from '../../../context/StateContext'
import MobileNav from '../../../components/MobileNav'
import Slider from '../../../components/Slider'
const last = ({deal,alldeals}) => {

  const context =useContext(Context)
  const{handleChoice,choices,choosing,setlastorder,lastorder,appear,addedd,setappear,showprice,addPrice,order,cartItems,setcartItems,settotalPrice,totalPrice, setaddPrice,toCart,setisfetch, setshowprice,open,setopen} = context
 
    const router = useRouter()
    const type = router.query.type
    const url = router.query.name
    const [Scroll, setScroll] = useState(false)
    const [Loading, setLoading] = useState(false)
    const {name,desc,image} =  deal
  
useEffect(() => {
    dispatch({ url })
    
    document.querySelectorAll('.opts p').forEach((option) =>{
           option.classList.remove("active")
           if(type === option.innerHTML)
           option.classList.add("active")
           

        })
}, [type])







const handleClick = (e) => {

 document.querySelectorAll('.opts p').forEach((option) =>{
           option.classList.remove("active")
          
       
           if(e.target === option)
           option.classList.add("active")
           

        })
        setLoading(true)
router.push(`/${e.target.innerHTML}`)

}



const reducer = (state,action) =>{

switch(action.url){
case'my-box':
return ['choice of pizza','side item 1','side item 2','Addon']

case'veggie-lovers':
return['pizza 1','pizza 2','chilli cheese nuggets','potato wedges','Drink (1.25L.)','Addon']

case'cheese-mania':
return['pizza 1','pizza 2','Cheddar Pops','garlic bread supreme','Bottle 1.25L ','Addon']

case'limo-pizza':
return['First pizza','Second Pizza','Third Pizza','First Dip','Second Dip','Third Dip','Addon']

case'wow-triples-medium':
return['Medium pizza','Medium pizza','Medium pizza','Drink (1.25L.)','Addon']
case'wow-triples-large':
return['Large pizza','Large pizza','Large pizza','Drink (1.25L.)','Addon']
case'buy-1-pizza-get-1-free':
return['First pizza','Second pizza','Addon']
case'buy-1-get-one-free':
return['first pizza','second pizza']
case'meal-for-12':
return['Medium pizza','Medium pizza','Medium pizza','Medium pizza','Medium pizza','Medium pizza','potato wedges','Bottle (2.25L)','Bottle (2.25L)','Addon']
case'meal-for-8':
return['Medium pizza','Medium pizza','Medium pizza','Medium pizza','Potato Wedges','Bottle (2.25L)','Addon']
case'supreme-duo-meal':
return['Medium pizza','1st Side Item','2nd Side Item','Soft Drink','Soft Drink','Addon']
case'supreme-family-meal':
return['Medium pizza','Medium pizza','1st Side Item','2nd Side Item','Bottle (1.25L)','Addon']
case'supreme-party-meal':
return['Medium pizza','Medium pizza','Medium pizza','1st Side Item','2nd Side Item','Bottle (1.25L)','Addon']
case'solo-meal-with-wedges':
return['small pizza','potato wedges','Soft Drink','Addon']
case'solo-meal-with-garlic-bread':
return['small pizza','Garlic Bread ','Soft Drink','Addon']
default: return state
}


}





const [steps,dispatch] = useReducer(reducer,[])































useEffect(() => {
    if(steps.length){
  const el = document.querySelector('.steps .container .box')
 const cont = document.querySelector('.steps .container')
  var isOverflowing = el.offsetWidth == cont.offsetWidth
                  
 
 if (isOverflowing){
                  setScroll(true)
                  el.classList.remove('small')
 }
}
}, [steps])


const scrollRight = () => {
let box=document.querySelector('.steps .container .box')
box.scrollLeft += 60
}
 
const scrollLeft = () => {
let box=document.querySelector('.steps .container .box')
box.scrollLeft -= 60
}
 



  useEffect(() => {
    if(steps.length)
    setisfetch(true)
    console.log('indexxxxxxxxxxxx')
    handleChoice(0,steps,alldeals)

  }, [steps])
  
const handleBackClick=()=>{
  router.push(`/${type}`)
  setshowprice(false)
}










  return (
    <div className='menu-check'>
        {Loading &&  <div className='loading'>
<Hearts 
  height="80"
  width="80"
  color="red"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
 </div>}
 
        
        <div className='check-nav'>
            <div className='container remove-mobile'>
            <Link href={'/'} ><a ><Image src="/pizzahut-desktop-logo.svg" alt="me" width="150" height="37.09" style={{cursor:'pointer'}} /></a></Link>
        <div className='opts' onClick={(e)=>handleClick(e)}>
       <p>deals</p>
       <p>meal for 1</p>
       <p>sharing meals</p>
       <p>starters</p>
       <p>pizza</p>
       <p>pasta</p>
       <p>dessert</p>
       <p>drinks</p>
        </div>
        </div>
        </div>

<MobileNav open={open} setopen={setopen}/>
<Slider open={open} setopen={setopen}/>





        <div className='container'>
        <div className='thedeal'>
            <div className='deal-name'>
        <h2>{name}</h2>
        <p>{desc}</p>
        </div>
        <img  src={urlFor(image)} alt={name} />
        <div className='back' onClick={() =>handleBackClick() }>
            <MdArrowBackIos className='arrow'/>
            <p>back</p>
        </div>
        </div>
</div>
<div className='steps'>
<div className='container'>
   {Scroll && <GrNext onClick={()=>scrollRight()} className='next'/>}
 {Scroll && <GrPrevious onClick={()=>scrollLeft()} className='prev'/>}
    <div className='box small' >
{steps.map((step,index)=>(

<p  className={`${index == appear && (index < addedd || index == 0) ?'active':''}${index+1 == steps.length ? ' last':''}${addedd - index > 1 ? ' green': ''}${lastorder && (index == steps.length-1) ? 'green':''} `} onClick={(index < addedd || index == 0) ? ()=>setappear(index) :undefined} key={index}> {index+1}.{step} </p>

))}




</div>
</div>
</div>
{steps.map((step,index)=>(

<div key={index} style={index == appear  && (index < addedd || index == 0) ? {dispaly:'block',padding:'30px'}:{display:'none'} }  className={`order-choose index-${index}`}  >
<div className='container'>



{
choices[index]?.map((choice,i) =>(

<Card2 deal={deal} alldeals={alldeals}    index={index} key={i} steps={steps} choice={choice}/>
))
}   







</div>

</div>

))}
{showprice && <div className='showprice' onClick={()=>toCart(deal,type)}>
<p style={{backgroundColor:'green',padding:'10px 20px',color:'white',textAlign:'center',fontWeight:'bold',textTransform:'uppercase',width:'40%'}}>add to my basket aed {deal.price + addPrice }</p>

</div> }






    </div>
  )
}

export const getStaticPaths = async ()  => {
const query = `*[_type == "deals"] `
const deals = await client.fetch(query)




const paths = deals.map((deal) => ({

params:{
    type:`${deal.type}`,
  name:`${deal.slug.current}`
}


}))
return {
paths,fallback:'blocking'



}
}
export const getStaticProps = async ({params:{name}})=>{
    const query = `*[_type == "deals" && slug.current == '${name}'][0]`
    const all = `*[_type == "deals"]`


    const deal = await client.fetch(query)
    const alldeals = await client.fetch(all)
   
    return{
        props:{deal,alldeals}
    }

}






export default last