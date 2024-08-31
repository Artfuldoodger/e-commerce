import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useContext, useEffect, useState } from "react";




export default function Layout() {
    let navigate = useNavigate()
    const[userData,setUserData]= useState(null);
        
    useEffect(()=>{
            
        if (localStorage.getItem('usertoken')){
            setUserData(localStorage.getItem('usertoken'))
        }else{
            navigate('/login')
        }
    },[])

    return <>
    
    <Navbar/>

    <div className="pt-10">
    <Outlet></Outlet>
    </div>
    <Footer/>
    
    
    </>
    
}