import '../styles/globals.css'
import React from 'react'
import "swiper/css/bundle";
import StateContext from '../context/StateContext';
import {Toaster} from 'react-hot-toast'
function MyApp({ Component, pageProps }) {

  return( 
  
  <StateContext>
    <Toaster/>
  <Component {...pageProps} />
  </StateContext>
  )
}

export default MyApp
