import React from "react";
import { Carousel } from "flowbite-react";
import offer5 from '../img/offer5.jpg'
import offer2 from '../img/offer2.jpg'
import offer3 from '../img/offer3.jpg'
import offer6 from '../img/offer6.jpg'
// import offer4 from '../img/offer4.jpg'
export default function Offers() {
  return (
    <>
      
      <div className=" relative w-100 h-[500px]  overflow-hidden rounded-lg md:h-96 ">
    
          <Carousel slideInterval={80} >
           
            <img src={offer2} alt="..." />
            <img src={offer3} alt="..." />
            <img src={offer5} alt="..." />
            <img src={offer6} alt="..." />
          </Carousel>
        </div>
        
      
            
              
            
      {/* <Ourteam></Ourteam> */}
      {/* <Card1></Card1> */}
     
      
    </>
  );
}