import React,{useEffect,useCallback,useContext,useLayoutEffect,useState,useRef} from 'react'
import { Context } from '../context/StateContext'
import { urlFor } from '../lib/client'
import { toast } from 'react-hot-toast'
import { Hearts  } from  'react-loader-spinner'

const Card2 = ({choice,steps,index,alldeals,deal}) => {
 const context =useContext(Context)
  const{handleChoice,choosing,choices,appear,addeddgreen,showprice, setshowprice,setaddedd,setappear,setlastorder,lastorder,product,isfetch,setisfetch, setproduct,order,addPrice, setaddPrice, setorder} = context
const [orderLoading, setorderLoading] = useState(false)

let s

let foundProduct 

    const{name,image,price,category
} =choice
    



    
  

const handleUserKeyPress =(e)=>{
      setorderLoading(true)

document.querySelectorAll(`.order-choose.index-${index} .container .card2 button`).forEach((card) =>{
card.innerHTML="Add"
card.classList.remove('added')
}) 
 e.target.innerHTML="Added"
 e.target.classList.add('added')


  

    s= setTimeout(() => {
foundProduct =order.find((item,i) => i === index)

if(foundProduct){
  let ordercopy = [...order]
  ordercopy.splice(index,1)
   ordercopy.splice(index,0,name)
  setorder(ordercopy)
  deal.opt = order
  
}
    
 else{  
    setorder(prev => [...prev,name])

  } 

    if(index + 1 == steps.length){
      
      setlastorder(true)
if(category == 'addon'){
  if(!(name == 'noaddon')){
  toast(`${name} has been added`,
  {
    icon: '☑️',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
 setaddPrice(price) 
}
else{
  setaddPrice(0)
}
  deal.opt = order
      setshowprice(true)
console.log(deal)
}


      handleChoice(index  ,steps,alldeals )
     
    }

  
       else{
        setisfetch(false)
      handleChoice(index + 1 ,steps,alldeals )
  
       }
window.scrollTo(0, 0)

setorderLoading(false)
    }, 1000);




  
return () => {

clearTimeout(s)



}
}









  return (
    <div className='card2' style={{padding:'15px',backgroundColor:'white'}}>
       {orderLoading &&  <div className='loading'>
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
        {choice.name ?<img src={urlFor(image)} style={{maxWidth:'100%'}} alt={name}/> :'' }

<p style={{fontWeight:'bold',textTransform:'capitalize'}}>{name}</p>
<button type='button'   onClick={handleUserKeyPress} >Add</button>
    </div>
  )
}

export default Card2