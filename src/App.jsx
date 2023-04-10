import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from './components/navbar'
import Footer from './components/team'
import Header from './components/header'
import { Container } from 'postcss'
import Sign from './components/sign'
import './components/header.css'
export default function App() {
  return (
    <p >
      <Header></Header><br></br>

      <br></br><br></br>
      <p className='mainclass'>
      <h1></h1>
      <h1 className='fname'>
      FOOD HUT

BAKERY & CAFE
      </h1>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <p className='sname'><h2>Best Restaurants in Chandigarh for dinner
Open today until 11:00 PM</h2></p><br></br>
      <p>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        
       <a className='fbutton' datatype='web' href='#'>
        SHOP DELICIOUS
       </a>
      </p>
      </p>
      <Navbar></Navbar> <br></br> <br></br> <br></br>
      
        <a href="#" className='viewall'>View All</a>
      <br></br>
      <h2 className='menu'>Menu</h2><br></br><br></br>
      <h3 className='maincourse'>main course</h3>
      
      <h2 ><span  className='maincourse' > We are Best Restaurant in Chandigarh</span></h2><br></br><div className='sname'>Backhouse Restaurant is the best Indian food Restaurant in Chandigarh and also the Best Family Restaurant and has a wide range of food. Our professional staff and outstanding offering service make us the best Restaurant in Chandigarh Punjab University. Backhouse is the best Indian restaurant in Chandigarh, serving traditional Indian cuisine, Veg, Non-veg, North Indian and Chinese cuisine are also available. Especially our home-style mutton is famous in Chandigarh. Pay after satisfied with service with ease by using any of the available modes of payment, such as Cash, Google pay, etc. We've earned a reputation for providing excellent service at a reasonable price. Backhouse Restaurant is a nice place to spend time with your family, whether it's a private dinner, evening hang with friends, family get-togethers, or team outings.</div>
      <br></br><br></br>
      <a >
      <img alt="Header image for the site" src="https://lh3.googleusercontent.com/p/AF1QipPZ68PnuSM5Am-Z9H_E1K2okfdI8RpX0XdB6Qsh=w1080-h608-p-k-no-v0" data-iml="5140733.399999976" data-atf="true">
     
      </img>
      </a><Sign></Sign>
      <div class="review1"><a class="" jslog="66412;" href="#" rel="noreferrer">Write a Review</a > <a class="review" jslog="66413; track:impression,click;" href="https://search.google.com/local/reviews?placeid=ChIJAQAAAIntDzkR7U1Gx36WWr4" rel="noreferrer">Read More</a></div>
    <br></br><br></br><br></br><br></br>
    
    
    
    <Footer></Footer>
    
  </p>
  
  )
}