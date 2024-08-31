import axios from "axios";
import { useEffect, useState } from "react";



export default function Brands() {


    const [brands , setBrands]= useState([]);

    async function getBrands() {
        try {
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
            setBrands(data.data);
            console.log(data.data);
            
            
                
        } catch (err) {
            console.log(err);
           
            
            
        }

        
        
    }
    
    useEffect(()=>{

        getBrands()

    } ,[])


    return <>
    
    <h1 className="text-center text-main text-4xl pt-4">All Brands</h1>
    {brands.length? <div className="flex flex-wrap pt-10">
        {brands.map((brand)=> <div key={brand.id} className=" w-1/5  product p-3 ">
    <div className="categorycard hover:shadow-[#4FA74F] hover:shadow-md p-6 border">
        <img src={brand.image} className="w-full"  alt={brand.title} />
        <div>
        <h2 className="text-center text-sm py-3">{brand.name}</h2>
        </div>
        </div>
        </div>)}
    </div>:<div className="flex justify-center items-center py-60 ">
   <i className="fas fa-spinner fa-spin-pulse fa-10x"></i>
   </div>}
    
    
    
    </>
    
}