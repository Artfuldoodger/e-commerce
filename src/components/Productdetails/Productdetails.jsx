import axios from "axios";
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import Slider from "react-slick";
import { CartContext } from "../Context/CartContext";



export default function Productdetails() {
    let {addProductToCart}= useContext(CartContext)
    const [productDetails , setProductsDetails]= useState({});
   var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      };

    let {id} = useParams();
    async function GetProductDetails(id) {
        let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        console.log(data);
        setProductsDetails(data.data);    
        
    }
    useEffect(()=>{

        GetProductDetails(id)

    } , [])

    return <>
        <h1 className="text-4xl">Product details</h1>
    <div className="flex items-center py-10">
        <div className="w-1/4 p-4">
        <Slider {...settings}>
        {productDetails.images?.map((image , index)=> <img src={image} key={index} className="w-full"></img>)}
    </Slider>

        </div>
        <div className="w-3/4">
        <div>
            <h2 className="text-2xl py-2">{productDetails.title}</h2>
            <p className="py-2 text-sm text-gray-500">{productDetails.description}</p>
           <div className="flex justify-between">
           <h3 className="py-2">{productDetails.price}egb</h3>
           <h3><i className="fa-solid fa-star text-yellow-400"></i> {productDetails.ratingsAverage}</h3>
           </div>
           <div className="flex justify-around">
        <button onClick={()=>addProductToCart(productDetails.id)} type="submit" className= "text-white btn bg-green-400 hover:bg-green-600 duration-1000 w-2/3 rounded-md py-2 mt-3">+ add</button>
        </div>
        </div> 
        </div>
    </div>
    
   

    
    </>
}