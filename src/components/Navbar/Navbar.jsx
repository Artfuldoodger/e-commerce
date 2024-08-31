import { Link, NavLink, useNavigate } from "react-router-dom"
import Logo from '../../assets/freshcart-logo.svg'
import { useContext } from "react"
import { Usercontext } from "../Context/Usercontext"
import { CartContext } from "../Context/CartContext";



export default function Navbar() {
    let {userData ,setUserData} =useContext(Usercontext);
    let {cart} =useContext(CartContext);
    let navigate = useNavigate()
    function logOut() {
        localStorage.removeItem('usertoken');
        setUserData(null);
        navigate('/login')

        
    }
    return <>

    
    <nav className="navbar absolute bg-gray-200 top-0 left-0 right-0 py-4 text-gray-600">
        <div className="contaiuner flex justify-around w-full">
          <div>
            <img src={Logo} alt="Logo"/>
          </div>
        <div>
            {userData && <ul  className=" flex"> 
                <li className="px-4"><NavLink to=''>Home</NavLink></li>
                <li className="px-4"><NavLink to='Cart'>cart</NavLink></li>
                <li className="px-4"><NavLink to='Wish list'>Wish list</NavLink></li>
                <li className="px-4"><NavLink to='Products'>Products</NavLink></li>
                <li className="px-4"><NavLink to='Categories'>Categories</NavLink></li>
                <li className="px-4"><NavLink to='Brands'>Brands</NavLink></li>
                </ul>}
            </div>
        <div >
            <ul className="flex">
            {userData ?
            <> 

             <Link to='cart'>
             <div className="relative">
               <i  className="fa-solid text-4xl fa-cart-shopping"></i>
               <span className="absolute left-5 bottom-4 text-white  border-2 bg-[#4FA74F] px-1 rounded-md"> {cart? cart.numOfCartItems : 0}</span>          
                </div> 
             </Link> 
            <li onClick={()=> logOut()} className="px-4 cursor-pointer"><NavLink to='Log out'>Logout</NavLink></li>
            </> :
               <> 
                <li className="px-4"><NavLink to='login'>Login</NavLink></li>
                <li className="px-4"><NavLink to='Regester'>Regester</NavLink></li>
                </>
            } 
              
                
                </ul>
                </div>  
            
        </div>
        
    </nav>
  
    
    
    
    </>
    
}