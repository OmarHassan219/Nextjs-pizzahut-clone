import React,{useState,useEffect} from 'react'
import {toast} from 'react-hot-toast'
export const Context = React.createContext()
import { useRouter } from 'next/router'

const StateContext = ({children}) => {
    const [active, setactive] = useState(false)
    const router =useRouter()
const [appear, setappear] = useState(0)
  const [addedd, setaddedd] = useState(1)
  const [choices, setchoices] = useState([])
  const [showprice, setshowprice] = useState(false)
  const [product, setproduct] = useState({})
  const [lastorder, setlastorder] = useState(false)
  const [addPrice, setaddPrice] = useState(0)
 const [order, setorder] = useState([])
 const [isfetch, setisfetch] = useState(true)
 const [removeItem,setremoveItem] =useState(false)
 const [cartItems, setcartItems] = useState([])
 const [totalPrice, settotalPrice] = useState(0)
 const [removedItemIndex, setremovedItemIndex] = useState(0)
const [applied, setapplied] = useState(false)
const [dicountedPrice, setdicountedPrice] = useState(0)
const [open, setopen] = useState(false)

const handleDiscount = (inputRef)=>{
if(inputRef == "code20")
  setapplied(true)
   

}





  let choosing =[]
  let noadd={}
let arr=[]
let price=0
useEffect(() => {
  handleTotalPrice()
// handleDiscountprice()
  
}, [cartItems])

const handleTotalPrice=()=>{
  cartItems?.map(item => {
price += item.price


  })
  // setdicountedPrice(price)
  settotalPrice(price)
  // if(applied){
  //   let discount = totalPrice-totalPrice*0.2
  // setdicountedPrice(discount)
  // }
}
















    const handleChoice=(index,steps,alldeals)=>{
   
    // if((index < addedd || index == 0)){
    setappear(index)
    let indexplus = index + 1
   setaddedd(indexplus)
   
  //  console.log(index,'index from state context')
  //  console.log(appear,'apear from state context')
  //  console.log(addedd,'addedd from state context')
console.log(isfetch)
if(isfetch){
    steps.forEach(step => {
      
   
    choosing = alldeals.filter((deal)=>{
        
       

if(step.toLowerCase().includes('pizza') && deal.type == 'pizza'){
return  deal  }
else if((step.toLowerCase().includes('drink') || step.toLowerCase().includes('bottle') )&& deal.type =='drinks'){
return deal}
else if ((deal.name.toLowerCase()) === (step.toLowerCase())) return deal




else if(step.toLowerCase().includes('side') && deal.type == 'starters' && !(deal.name =='Chipotle BBQ' ||deal.name =='Creamy Ranch'||deal.name =='Fiery Peri' )){
return deal}

else if(step.toLowerCase().includes('addon')){
    if(deal.name.toLowerCase() == 'noaddon'){
     noadd = deal }
    return deal.category == 'addon'
}
else if(step.toLowerCase().includes('dip') && (deal.name =='Chipotle BBQ' ||deal.name =='Creamy Ranch'||deal.name =='Fiery Peri' ) ){
    return deal
}
else if(deal.name.toLowerCase().includes(step.toLowerCase())) return deal

} 

)

if(step.toLowerCase().includes('addon'))  {

index=choosing.findIndex((choose) => choose.name === 'noaddon')
choosing.splice(index,1)

choosing.splice(0,0,noadd)

}  
arr.push(choosing)
});

setchoices(arr)



return choices}
  }


const toCart =(deal,type)=>{

deal.opt = order
deal.addon = addPrice
deal.qty = 1
setcartItems(prev => [...prev,{...deal,price:deal.price+addPrice}])
// setcartItems([...cartItems,{...deal}])

router.push(`/${type}`)

}



// const handleDiscountprice =()=>{
// //   if(applied){
// // let math = totalPrice-totalPrice*0.2
// // setdicountedPrice(math)
// //   }
// // else{
// //   setdicountedPrice(totalPrice)
// // }
// }






















    
    const handleOrderClick = (name,type,slug,option) =>{
const day = new Date()
const d = day.getDay()
console.log(name)
if(name === "Buy 1 Pizza Get 1 Free"){
if(d != 2 ){
toast.error("This offer is available only on tuesday.")
}



}
else if(type != "deals" && type != 'meal for 1' && type !=  'sharing meals'){
  console.log(cartItems)
toast.success(`${name} has been successfully added to cart`)
setcartItems(prev => [...prev,option])
}
else {
router.push(`/${type}/${slug.current}`)
}
}
  return (

    <Context.Provider value={{active,setactive,handleOrderClick,handleChoice,choices,choosing,appear,addedd,setappear,setaddedd,showprice, setshowprice,setlastorder,lastorder,isfetch,product,setisfetch,cartItems,setcartItems,settotalPrice,totalPrice ,setproduct,addPrice,toCart, setaddPrice,order,removeItem,setremoveItem,applied,setapplied, setorder,removedItemIndex,dicountedPrice,open,setopen,setdicountedPrice,handleDiscount, setremovedItemIndex}}>
{children}
    </Context.Provider>

  )
}

export default StateContext