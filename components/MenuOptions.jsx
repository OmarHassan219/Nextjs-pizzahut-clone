import React from 'react'
import Link from 'next/link'
const MenuOptions = ({typesArr,alldeals}) => {
    
    for(let i=0 ; i<alldeals.length; i++){
  if(typesArr.includes(alldeals[i].type)) continue
  
  typesArr.push(alldeals[i].type)
 
  
}
  return (
    <div className='type' >
    
  {typesArr?.map((type,i) => (
type !== undefined? <Link key={i} href={`/${type}`} ><p key={i} >{type}</p></Link>:null 
  ))}
  
</div>
  )
}

export default MenuOptions