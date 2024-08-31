import axios from "axios";
import { useContext, useEffect, useState } from "react";
import RecentProducts from "../recentProducts/recentProducts";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import MainSlider from "../Mainslider/MainSlider";









export default function Home() {



    
    return <>
    
         <MainSlider/>  
        <CategoriesSlider/>
        <RecentProducts/>

       
    
    
    
    </>
    
}