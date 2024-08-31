import {useFormik} from 'formik'
import React, { useContext, useState, useSyncExternalStore } from 'react';
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { Usercontext } from '../Context/Usercontext';
 


export default function Regester() {
    const [apiError , setApiError]= useState(null)
    
    const [Loading , setLoading]= useState(false)
    let {setUserData} = useContext(Usercontext)
    
    let Navigate =useNavigate()
    async function Regester(values) {

        try{
            setLoading(true);
        let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values) 
        console.log(data);
        
        localStorage.setItem('userToken', data.token)
        
        
        Navigate('/');
        setUserData(data.token);
        setLoading(false)
    }catch(err){
        console.log(err.response.data.message);
        setApiError(err.response.data.message);
        setLoading(false)

    }

        
    }

    let validationSchema = Yup.object().shape({

        name: Yup.string().min(3 ,'min length is 3').max(13 ,'max length is 13').required('name is required'),
        email: Yup.string().email('email is invalid').required('email is required'),
        password: Yup.string().matches(/^[A-Z]\w{5,10}$/,'password invalid ex(ahmed123)').required('password is required'),
        rePassword: Yup.string().oneOf([Yup.ref('password' ,'rePaswword and password must match')]).required('password is required'),
        phone: Yup.string().matches(/^(002)?01[0125][0-9]{8}$/ ,'must be egyption number').required('phone is required')

    })

    let formik = useFormik({
        initialValues:{
            name: '',
            email:'',
            password:'',
            rePassword:'',
            phone:''
        },
        validationSchema
        ,onSubmit:Regester
    })

    return <>

        <h1 className="text-3xl flex justify-start">Register now:</h1>
        <form onSubmit={formik.handleSubmit} className="mt-6">  

  {apiError && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
    {apiError}
    </div>}
  <div className="mb-2 ">
    <label htmlFor="name"  className=" mb-2 font-medium flex justify-start">Name:</label>
    <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  {formik.errors.name && formik.touched.name &&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
    {formik.errors.name}
    </div>}
  <div className="mb-2 ">
    <label htmlFor="email"  className=" mb-2 font-medium flex justify-start">Email:</label>
    <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  {formik.errors.email && formik.touched.email &&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
    {formik.errors.email}
    </div>}
  <div className="mb-2 ">
    <label htmlFor="password"  className=" mb-2 font-medium flex justify-start">password:</label>
    <input type="text" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  {formik.errors.password && formik.touched.password &&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
    {formik.errors.password}
    </div>}
  <div className="mb-2 ">
    <label htmlFor="rePassword"  className=" mb-2 font-medium flex justify-start">rePassword:</label>
    <input type="text" name="rePassword" id="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  {formik.errors.rePassword && formik.touched.rePassword &&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
    {formik.errors.rePassword}
    </div>}
  <div className="mb-2 ">
    <label htmlFor="phone"  className=" mb-2 font-medium flex justify-start">phone:</label>
    <input type="text" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  {formik.errors.phone && formik.touched.phone &&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
    {formik.errors.phone}
    </div>}

    {Loading?<button type="button" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-1 text-center bg-blue-600">
  <i className="fas fa-spinner fa-spin-pulse"></i>
  </button>:<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
}
          </form>

    
    
    
    </>
    
}