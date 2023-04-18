import Navbar from './components/navbar'
import Header from './components/header'
import './components/Header.css'
import Footer2 from './components/Footer2'
import Card2 from './components/Card'
import Offers from './components/Offers'
import Contact1 from './components/Contact1'
import Features from './components/Features'
import Stats from './components/Stats'
import Gallary from './components/gallary'
import Banner from './components/Banner'




/*import { BrowserRouter,Route,Routes } from 'react-router-dom'*/



export default function App() {
  return (
    <p  className='items-center justify-center'>
       <p className='mainclass'>
      <Header></Header><Banner></Banner>
      <h5></h5>
     
      <h5 className='fname justify-center'>
      MOONLIGHT 

RESTAURANT<br></br> & <br></br>CAFE
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
        
        
       
        
       <a className='fbutton' datatype='web' href='#'>
        SHOP DELICIOUS
        <br></br>
       </a>
       
      </p><br></br>
      </p>
      
      <Navbar></Navbar> 
      
      <Offers></Offers>
      <br></br>
      <h2 className='menu'>Menu</h2><br></br>
      <p>
      <img src='https://img.freepik.com/free-vector/modern-restaurant-menu-fast-food_52683-48982.jpg?w=2000' ></img>
    
      </p><br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" className='viewall justify-center'>View All</a><br></br><br></br><br></br>
      <a >
      <h2 ><span  className='maincourse text-center' ><br></br> We are Best Restaurant in Chandigarh</span></h2><div className='tname w-86 p-7 m-10 border bg-gray-100  border-gray-200 shadow dark:bg-gray-800 scale-90 hover:scale-110 ease-in duration-500'><p><h5>&nbsp;&nbsp;Moonlight is the best Indian food Restaurant in Chandigarh and also the Best Family Restaurant and has a wide range of food. Our professional staff and<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;outstanding offering service make us the best Restaurant in Chandigarh Punjab University. Backhouse is the best Indian restaurant in Chandigarh, serving<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;traditional Indian cuisine, Veg, Non-veg, North Indian and Chinese cuisine are also available. Especially our home-style mutton is famous in Chandigarh. Pay<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;after satisfied with service with ease by using any of the available modes of payment, such as Cash, Google pay, etc. We've earned a reputation for providing <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;excellent service at a reasonable price. Backhouse Restaurant is a nice place to spend time with your family, whether it's a private dinner, evening hang with <br></br>friends, family get-togethers, or team outings.</h5></p></div>
      <br></br><br></br>
      <Gallary></Gallary>
     
      </a>
      <Features></Features>
      <Stats></Stats>
      <a><h1 className='mt-6 text-center text-5xl font-bold tracking-tight text-yellow-300' >Customer <a className='text-blue-700'>Reviews</a></h1></a>
     
      <Card2></Card2>
      
      <form className='flex justify-center'>
      <div class="w-1/2 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600  " 

      >
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           
           <textarea id="comment" rows="2"class="w-full px-0 text-sm text-gray-900 bg-white border-1 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a review..." required></textarea>
       </div>
      <div class="flex items-center justify-center px-3 py-2 border-t dark:border-gray-600">
         <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Submit review
           </button></div></div>
        </form>
        
   
   <br></br><br></br><br></br><br></br>
   <br></br>
   <Contact1></Contact1>
   
   {/* <Team1></Team1> */}
   <Footer2></Footer2>
     
 
  
   {/* <BrowserRouter>
   <Routes>
    <Route path='/menu' element={<Header></Header>} ></Route>
   </Routes>
   </BrowserRouter> */}
    
  </p>
  
  
  )
}