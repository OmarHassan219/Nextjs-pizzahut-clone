import React,{useState,useEffect} from 'react'
import {MdDeliveryDining} from 'react-icons/md'
import {FaCashRegister} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import Link from 'next/link'
const LocationCard = ({setactive,active}) => {
    
const handleLocation = ()=>{
navigator.geolocation.getCurrentPosition(function(position) {
      
    });
}
      
   return (
    <div className="mylocation">
      
<div className='options' >
<p className={!active ? 'active' : null} onClick={() => setactive(false)} > <MdDeliveryDining className='location-icon '/> Delivery  </p>
<p className={active ? 'active' : null} onClick={() => setactive(true)} > <FaCashRegister className='location-icon' /> Pick Up  </p>
</div>
<div className='findlocation'>
    {active ? <p className='collect'>Collect your food from the Pizza hut outlet 
</p> : ''}
    <p>Where will you receive your Pizza?
</p>
<button className='findlocation-btn' type='button' onClick={handleLocation}> <ImLocation2/>  Find My Location</button>
<p>Or Search By City And Area
</p>
<input type="text" name="city" placeholder='Select City' />
<input type="text" name="area" placeholder='Select area' />
<Link href={"/deals"}><button type='button'>Start My Order</button></Link>

</div>
    </div>
  )
}

export default LocationCard