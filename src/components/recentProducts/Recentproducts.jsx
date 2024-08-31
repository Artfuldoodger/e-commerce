import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import axios from "axios"
import { CartContext } from "../Context/CartContext";
import { Wishlistcontext } from "../Context/Wishlistcontect";



export default function RecentProducts({product}) {

    let {addProductToCart}= useContext(CartContext)
    
    let {addWishlist}= useContext(Wishlistcontext)
    
    const [products , setProducts]= useState([]);
    async function getRecentProducts() {
        try {
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
            setProducts(data.data);
            console.log(data.data);
            
            
                
        } catch (err) {
            console.log(err);
           
            
            
        }

        
        
    }
    
    useEffect(()=>{

        getRecentProducts()

    } ,[])
   
    return<>

        
<form className="max-w-md mx-auto py-10">   
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    </div>
    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search" required />
    </div>
</form>


    {products.length? <div className="flex flex-wrap">
        {products.map((product)=> <div key={product.id} className=" w-1/5  product hover:shadow-[#4FA74F] hover:shadow-md p-6">
    <div className="productcard">
        <Link to={`Productdetails/${product.id}`}>
        <img src={product.imageCover} className="w-full" alt={product.title} />
        <h2 className="text-main text-sm">{product.category.name}</h2>
        <h3 className="py-2">{product.title.split(' ').slice(0 , 2)}</h3>
        <div className="flex justify-between">
        <h3>{product.price} Egp</h3>
        <h3><i className="fa-solid fa-star text-yellow-400"></i> {product.ratingsAverage}</h3>
        </div>
        </Link>
        <div className="flex justify-between items-baseline">
        <button onClick={()=>addProductToCart(product.id)} type="submit" className= "text-white btn bg-green-400 hover:bg-green-600 w-full rounded-md py-2 mt-3">+ add</button>
        <i onClick={()=>addWishlist(product.id)} className="fa-solid fa-heart ps-5 cursor-pointer" ></i>
        </div>
        </div>
        </div>)}
    </div>:<div className="flex justify-center items-center py-60 ">
   <i className="fas fa-spinner fa-spin-pulse fa-10x"></i>
   </div>}
    
    
    
    </>
    
}