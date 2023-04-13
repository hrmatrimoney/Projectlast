import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from './components/navbar'
import Footer from './components/team'
import Header from './components/Header'
import { Container } from 'postcss'
import Sign from './components/sign'

import './components/Header.css'
import Carousel from './components/Carousel2'
import { Rating } from 'flowbite-react'
import Rating2 from './components/rating2'
import Footer2 from './components/Footer2'
import Card2 from './components/Card'
/*import { BrowserRouter,Route,Routes } from 'react-router-dom'*/



export default function App() {
  return (
    <p >
      <Header></Header>
     <p className='mainclass'>
        
      <h5></h5>
      
      <h5 className='fname'>
      MOONLIGHT

BAKERY<br></br> & <br></br>CAFE
      </h5>
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
        <br></br> <br></br> <br></br> <br></br><br></br>
        <br></br>
        <br></br>
        <br></br> <br></br><br></br>
        <br></br>
        <br></br>
        <br></br> <br></br><br></br>
        <br></br>
        <br></br>
        <br></br> <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
      <p className='sname'><h5>Best Restaurants in Chandigarh for dinner
Open today until 11:00 PM</h5></p><br></br>
      <p>
        
        <br></br>
        <br></br>
        
       <a className='fbutton' datatype='web' href='#'>
        SHOP DELICIOUS
       </a>
      </p>
      </p>
      
      <Navbar></Navbar> <br></br> <br></br> <br></br>
      
       
      <br></br>
      <h2 className='menu'>Menu</h2><br></br>
      <p>
      <img src='https://img.freepik.com/free-vector/modern-restaurant-menu-fast-food_52683-48982.jpg?w=2000' ></img>
    
      </p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" className='viewall'>View All</a>
      <a >
      <h2 ><span  className='maincourse' ><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We are Best Restaurant in Chandigarh</span></h2><br></br><div className='tname w-86 p-7 m-10 border border-gray-200 shadow dark:bg-gray-800'><p><h5>&nbsp;&nbsp;Moonlight is the best Indian food Restaurant in Chandigarh and also the Best Family Restaurant and has a wide range of food. Our professional staff and<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;outstanding offering service make us the best Restaurant in Chandigarh Punjab University. Backhouse is the best Indian restaurant in Chandigarh, serving<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;traditional Indian cuisine, Veg, Non-veg, North Indian and Chinese cuisine are also available. Especially our home-style mutton is famous in Chandigarh. Pay<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;after satisfied with service with ease by using any of the available modes of payment, such as Cash, Google pay, etc. We've earned a reputation for providing <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;excellent service at a reasonable price. Backhouse Restaurant is a nice place to spend time with your family, whether it's a private dinner, evening hang with <br></br>friends, family get-togethers, or team outings.</h5></p></div>
      <br></br><br></br>
      <Carousel></Carousel>
      
      </a><Sign></Sign><br></br>
      <Card2></Card2>
      <form className='flex justify-center'>
      <div class="w-1/2 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600  " 

      >
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           
           <textarea id="comment" rows="4"class="w-full px-0 text-sm text-gray-900 bg-white border-1 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a review..." required></textarea>
       </div>
      <div class="flex items-center justify-center px-3 py-2 border-t dark:border-gray-600">
         <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Submit review
           </button></div></div>
        </form>
        
   
   <br></br><br></br><br></br><br></br>
    
   <Footer></Footer>  
  <Footer2></Footer2>
  
   {/* <BrowserRouter>
   <Routes>
    <Route path='/menu' element={<Header></Header>} ></Route>
   </Routes>
   </BrowserRouter> */}
    
  </p>
  
  
  )
}