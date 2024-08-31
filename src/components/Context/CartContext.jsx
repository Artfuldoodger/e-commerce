import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";



export let CartContext = createContext();

export default function CartContextProvider({children}) {
    
        let headers ={

            token : localStorage.getItem('userToken')
        }
        const [cart , setCart]= useState(null);
       
        async function Checkout(shippingAdress) {

            try{
                let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5174`,{
                    shippingAdress
                },
                    {
                    headers

                    });
                    console.log(data);
                    window.location.href = data.session.url
                    setCart(data);
                    
            }catch(err){
                console.log(err);
               
                
            }
            
        }
        async function deleteProduct(productId) {

            try{
                let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
                    headers

                    });
                    console.log(data);
                
                    setCart(data);
                    
            }catch(err){
                console.log(err);
                toast.error("An error occurred while processing your request.");
                
            }
            
        }
        async function addProductToCart(productId) {

            try{
                let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
                    productId

                },{
                    headers

                    });
                    console.log(data);
                    toast.success(data.message);
                    setCart(data);
                    
            }catch(err){
                console.log(err);
                toast.error("An error occurred while processing your request.");
                
            }
            
        }



        async function updateProductCount(productId , count) {

            try{
                let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
                    count

                },{
                    headers

                    });
                    console.log(data);
                    setCart(data);
                    
            }catch(err){
                console.log(err);
               
                
            }
            
        }


        async function getCart() {

            try{
                let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
                    headers

                    });
                    console.log(data);
                    setCart(data);
                    
            }catch(err){
                console.log(err);
                
            }
            
        }

        useEffect(()=> {

            getCart()
        } , [])

    return <CartContext.Provider value={  { Checkout, deleteProduct, updateProductCount, addProductToCart , getCart , cart ,setCart}  }>

        {children}

    </CartContext.Provider>
    
    
    
    
    
}