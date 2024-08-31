

import {useFormik} from 'formik'
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';



export default function Checkout() {

   let {Checkout} = useContext(CartContext)

    let formik = useFormik({
        initialValues:{
            details: '',
            phone: '',
            city: '',
            
         
        },
        onSubmit: Checkout
    })

    return <>

        <h1 className="text-3xl flex justify-start"> now:</h1>
        <form onSubmit={formik.handleSubmit} className="mt-6">  


  <div className="mb-2 ">
    <label htmlFor="details"  className=" mb-2 font-medium flex justify-start">Enter your details</label>
    <input type="text" name="details" id="details" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  
  <div className="mb-2 ">
    <label htmlFor="city"  className=" mb-2 font-medium flex justify-start">enter you city</label>
    <input type="text" name="city" id="city" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  <div className="mb-2 ">
    <label htmlFor="phone"  className=" mb-2 font-medium flex justify-start">enter you phone</label>
    <input type="tel" name="phone" id="phone" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  
<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

          </form>

    
    
    
    </>
    
}
