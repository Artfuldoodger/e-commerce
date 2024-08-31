import { Navigate, useNavigate } from "react-router"



export default function ProtectedRoute({children}) {

    if (localStorage.getItem('usertoken')){
        
        return children
    }else{
       
       return <Navigate to ={'/login'}/>  
    }
    
}