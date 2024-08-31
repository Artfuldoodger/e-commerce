import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export let Usercontext = createContext();

export default function Usercontextprovider({children}) {
    
        const[userData,setUserData]= useState(null);
        
        useEffect(()=>{
            if (localStorage.getItem('usertoken')) {
                setUserData(localStorage.getItem('usertoken'))
                
            }

        } ,[])

 
    return<Usercontext.Provider value={{userData , setUserData}}>
        {children}


    </Usercontext.Provider>
    
}