
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function CategoriesSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      };

      const [categories , setCategories]= useState([]);
      async function getRecentCategories() {
          try {
              let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
              setCategories(data.data);
              console.log(data.data);
              
              
                  
          } catch (err) {
              console.log(err);
             
              
              
          }
  
          
          
      }
      
      useEffect(()=>{
  
        getRecentCategories()
  
      } ,[])

    return <>
    
    
    <Slider {...settings}>
    {categories?.map((category , index)=> <div className="my-4 "key={index}>
         <img src={category.image} className="w-full h-[200px] pt-4"></img>
        <h2 className="text-center">{category.name}</h2>
        </div>)}
    </Slider>

    
    
    </>
    
}