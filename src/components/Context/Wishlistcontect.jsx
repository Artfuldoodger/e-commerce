


import axios from "axios";
import { createContext,  useState } from "react";
import toast from "react-hot-toast";



export let Wishlistcontext = createContext();
export default function Wishlistcontextprovider({children}) {
    let headers ={

        token : localStorage.getItem('userToken')
    }
    const [wishlist , setWishlist]= useState(null); 
    async function addWishlist(productId) {

    try{
        let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
            productId

        },{
            headers

            }

            );
            console.log(data);
            toast.success(data.message);
            setWishlist(data);
            
    }catch(err){
        console.log(err);
        toast.error("An error occurred while processing your request.");
        
    }
    
}





    return<>
    <Wishlistcontext.Provider value={  { wishlist , setWishlist , addWishlist}  }>

        {children}

</Wishlistcontext.Provider>

    
    
    
    </>
}