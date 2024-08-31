import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Allorders from './components/Allorders/Allorders'
import Wishlist from './components/Wish list/Wish list'
import Products from './components/Products/Products'
import Categories from './components/Categories/Categories'
import Brands from './components/brands/Brands'
import Login from './components/Log in/Log in'
import Logout from './components/Log out/Log out'
import Regester from './components/Regester/Regester'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Usercontextprovider from './components/Context/Usercontext'
import ProtectedRoute from './components/ProtectedRout/ProtectedRoute'
import Productdetails from './components/Productdetails/Productdetails'
import NotFound from './components/Notfound/NotFound'
import CartContextProvider from './components/Context/CartContext'
import toast, { Toaster } from 'react-hot-toast';
import Wishlistcontextprovider, { Wishlistcontext } from './components/Context/Wishlistcontect'





let routers=createBrowserRouter([
{path:'',element:<Layout/>,children:[
{index : true , element: <ProtectedRoute><Home/></ProtectedRoute>},
{path:'Cart' ,element: <ProtectedRoute><Cart/></ProtectedRoute>},
{path:'wish list' ,element: <ProtectedRoute><Wishlist/></ProtectedRoute>},
{path:'Products' ,element: <ProtectedRoute><Products/></ProtectedRoute>},
{path:'Categories' ,element: <ProtectedRoute><Categories/></ProtectedRoute>},
{path:'checkout' ,element: <ProtectedRoute><Checkout/></ProtectedRoute>},
{path:'allorders' ,element: <ProtectedRoute><Allorders/></ProtectedRoute>},
{path:'Brands' ,element: <ProtectedRoute><Brands/></ProtectedRoute>},
{path:'*' ,element: <NotFound/>},
{path:'Productdetails/:id' ,element: <ProtectedRoute><Productdetails/></ProtectedRoute>},
{path:'login' ,element:<Login/>},
{path:'Regester' ,element:<Regester/>},
{path:'Logout' ,element:<Logout/>},

    ]}
  ]
)

function App() {
  return (
    <>
      <Wishlistcontextprovider>
      <CartContextProvider>
      <Usercontextprovider>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster/>
      </Usercontextprovider>
      </CartContextProvider>
      </Wishlistcontextprovider>
    </>
  )
}

export default App
 