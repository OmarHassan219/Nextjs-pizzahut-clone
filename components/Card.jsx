import React,{useContext} from 'react'
import { Context } from '../context/StateContext'
import { urlFor } from '../lib/client'




const Card = ({option,type}) => {
    const {image,name,desc,price,slug} = option
    const context = useContext(Context)
    const {handleOrderClick} = context
  return (
    <div className='item'>
<img  src={image && urlFor(image)} alt={name} />
<div className='content'>
<p className='name'>{name}</p>
<p className='desc'>{desc}</p>
<div className='price' style={{display:'flex' , justifyContent:'space-between',alignItems:'center',marginTop:'15px'}}>
    <p style={price ?{fontSize:'15px',fontWeight:'bold'} :{display:"none"}}>AED  { parseFloat( price).toFixed(2)}</p>
    <button onClick={() => handleOrderClick(name,type,slug,option)} style={price?  {backgroundColor:'green',color:'white',border:'none',borderRadius:'5px' ,padding:'5px 15px',fontSize:'15px',marginRight:'5px',cursor:'pointer',userSelect:'none'} : {width:'100%',backgroundColor:'green',color:'white',border:'none',borderRadius:'5px' ,padding:'5px 15px',fontSize:'15px',marginRight:'5px',cursor:'pointer',userSelect:'none'} } type='button'>order</button>
</div>
</div>
    </div>
  )
}

export default Card