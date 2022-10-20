import React,{useEffect,useState} from 'react'
import { urlFor } from '../lib/client'
const Banner = ({bannerData:{image}}) => {
    const NoOfImages = image.length - 1
   const [index, setindex] = useState(0)
   useEffect(() => {
     const changeImage = setInterval(() => {
      
      setindex(previndex => previndex + 1) 
      
     }, 5000);
   return () => clearInterval(changeImage)
   }, [])

  
  return (



    <div>

{index > NoOfImages  ? setindex(0) : null }
 <img className='banner-img' src={urlFor(image && image[index])}/>
    </div>
  )
}

export default Banner