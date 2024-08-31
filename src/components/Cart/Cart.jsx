import { useContext, useEffect } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom";

export default function Cart() {


    let {getCart , cart , updateProductCount , deleteProduct}= useContext(CartContext)

    useEffect(()=>{

        getCart();

    } ,[])

    
    return <>
    
    <h1 className="text-4xl text-black py-4">Cart Shop</h1>
    {!cart?<div className="flex justify-center items-center py-60 ">
   <i className="fas fa-spinner fa-spin-pulse fa-10x"></i>
   </div>: 
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-4 mb-6">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
            <th scope="col" className="px-16 py-3">
            <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
            Product
            </th>
            <th scope="col" className="px-6 py-3">
            Qty
            </th>
            <th scope="col" className="px-6 py-3">
            Price
            </th>
            <th scope="col" className="px-6 py-3">
            Action
            </th>
        </tr>
        </thead>
        <tbody>
       {cart.data.products.map((product)=> <tr key={product.product.id} className="bg-white border-b  hover:bg-gray-50 ">
            <td className="p-4">
            <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 ">
            {product.product.title}
            </td>
            <td className="px-6 py-4">
            <div className="flex items-center">
                <button onClick={()=>updateProductCount(product.product.id ,product.count-1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                <span className="sr-only">Quantity button</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                </svg>
                </button>
                <div>
                    <span>{product.count}</span>
                </div>
                <button onClick={()=>updateProductCount(product.product.id ,product.count+1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                <span className="sr-only">Quantity button</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                </svg>
                </button>
            </div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {product.price} egp
            </td>
            <td className="px-6 py-4">
            <button onClick={()=> deleteProduct(product.product.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
            </td>
        </tr>)}
        

        </tbody>
        <tfoot>
            <tr className="text-xl font-semibold text-black">
                <td colSpan={3} className="">Total cart price</td>
                <td>{cart.data.totalCartPrice}</td>
            </tr>
        </tfoot>
    </table>
    </div> }

    <Link to={'/checkout'} className='bg-[#4FA74F] p-2 rounded text-white hover:bg-emerald-600 transition-all duration-500' >Check out</Link>
    
    
    
    </>
    
}