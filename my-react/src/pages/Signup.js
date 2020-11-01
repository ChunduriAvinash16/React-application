import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../config/firebase';
import * as Yup from 'yup';
import {useFormik, yupToFormErrors} from "formik";
export default function Signup() {
    const formik= useFormik({
        initialValues:{email:"",password:""},
        onSubmit:value=>{
            console.log("Formik",value);
        },
        validationSchema:Yup.object({
            email:Yup.string().required("Email is requried").email(),
            password:Yup.string().required('Password Requried').min(6)
        }),
    })


    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-r from-indigo-900 to-blue-400">
                <h1 className="w-full text-4xl tracking-widest text-center my-6">Signup Here</h1>
                <form className="m-5 w-5/6" onSubmit={formik.handleSubmit}>
                    <div className="w-full my-6">
                        <input type="email"  className="p-2 rounded text-black shadow w-full" placeholder="Email or UserName" 
                        {...formik.getFieldProps('email')}
                        />
                        {
                            
                            formik.touched.email && formik.errors.email ? 
                            <p>{formik.errors.email}</p>:null    
                        }
                       
                    </div>
                    <div className="w-full my-6">
                        <input type="password" className="p-2 rounded shadow w-full text-black" placeholder="Password"  
                           {...formik.getFieldProps('password')}   

                        />
                        {
                            formik.touched.password && formik.errors.password ? 
                            <p>{formik.errors.password}</p>:null  
                        }
                    </div>
                    <div className="w-full my-10">
                        <button type="submit" className="p-2 rounded shadow border-blue-100 w-full bg-gradient-to-r from-gray-900 to-blue-300 text-white">
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
