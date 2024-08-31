import axios from "axios";
import { useEffect, useState } from "react";





export default function getCategories() {

    
    const [categories , setCategories]= useState([]);

    async function getCategories() {
        try {
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
            setCategories(data.data);
            console.log(data.data);
            
            
                
        } catch (err) {
            console.log(err);
           
            
            
        }

        
        
    }
    
    useEffect(()=>{

        getCategories()

    } ,[])



    return <>
    <h1 className="text-center text-main text-4xl pt-4">All categories</h1>
    {categories.length? <div className="flex flex-wrap pt-10">
        {categories.map((category)=> <div key={category.id} className=" w-1/5  product hover:shadow-[#4FA74F] hover:shadow-md p-6">
    <div className="categorycard">
        <img src={category.image} className="w-full h-[300px] shadow-md"  alt={category.title} />
        <h2 className="text-center text-main text-xl py-3">{category.name}</h2>
        </div>
        </div>)}
    </div>:<div className="flex justify-center items-center py-60 ">
   <i className="fas fa-spinner fa-spin-pulse fa-10x"></i>
   </div>}
    
    
    
    
    </>
    
}