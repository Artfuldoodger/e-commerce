import {useFormik} from 'formik'
import React, { useContext, useState, useSyncExternalStore } from 'react';
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { Usercontext } from '../Context/Usercontext';


export default function login() {

    const [apiError , setApiError]= useState(null);
    const [Loading , setLoading]= useState(false);
     let {setUserData}= useContext (Usercontext)
    
    
    let Navigate =useNavigate()
    async function login(values) {

        try{
            setLoading(true)    
        let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values) 
        console.log(data);
        
        localStorage.setItem('usertoken', data.token)
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

        email: Yup.string().email('email is invalid').required('email is required'),
        password: Yup.string().matches(/^[A-Z]\w{5,10}$/,'password invalid ex(ahmed123)').required('password is required'),
        

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
        ,onSubmit:login
    })

    return <>

        <h1 className="text-3xl flex justify-start"> now:</h1>
        <form onSubmit={formik.handleSubmit} className="mt-6">  

  {apiError && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
    {apiError}
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
    <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  {formik.errors.password && formik.touched.password &&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
    {formik.errors.password}
    </div>}



    {Loading?<button type="button" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-1 text-center bg-blue-600">
  <i className="fas fa-spinner fa-spin-pulse"></i>
  </button>:<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
}
          </form>

    
    
    
    </>
    
}