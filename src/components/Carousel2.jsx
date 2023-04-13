import React from "react";
import { Carousel } from "flowbite-react";
import img1 from "../img/img1.png"
export default function Carousel2() {
  return (
    <>
      
      <div className="h-96 w-100 bg-slate-90 text-slate-900  border-90  font-bold  ">
      {/* <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 m-4">
                <span>Our </span>
                <span className="font-serif italic">Services</span>
              </h1> */}
          <Carousel slideInterval={1000} >
            <img src={img1}  alt="..." />
            <img src="https://media.istockphoto.com/id/1295387240/photo/delicious-meal.jpg?s=612x612&w=0&k=20&c=isW6dsxtdADt3pOlxGjmKjFyEY-E76Q3TXMmzN9-wuM=" alt="..." />
            <img src="https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8=" alt="..." />
            <img src="https://media.istockphoto.com/id/1162911786/photo/the-team-of-cooks-backs-in-the-work-in-the-modern-kitchen-the-workflow-of-the-restaurant-in.jpg?s=612x612&w=0&k=20&c=Nn1xO1gbUGnEzTHp4Sitg_ouob_co3jY5hDv_kHWzxE=" alt="..." />
            <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?cs=srgb&dl=pexels-pixabay-262047.jpg&fm=jpg"  alt="..." />
          </Carousel>
        </div>
        
      
            
              
            
      {/* <Ourteam></Ourteam> */}
      {/* <Card1></Card1> */}
     
      
    </>
  );
}