import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../config/firebase';
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik, useFormik, yupToFormErrors} from "formik";
export default function Signup() {
    const history=useHistory();
     return (
         <Formik
         initialValues={{email:"",password:""}}
         onSubmit={(value,formikbag)=>{
             firebase.auth().createUserWithEmailAndPassword(value.email,value.password)
             .then((res)=>{
              history.push("/");   
             })
             .catch((err)=>{
                 formikbag.setFieldError("email",err.message);
                 //formikbag.setFieldError("password",err.message)}
             })
 
         }}
         validationSchema={Yup.object({
             email:Yup.string().required("Email is requried").email(),
             password:Yup.string().required('Password Requried').min(6)
         })}        
                
        >
        {(formik)=>
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-r from-indigo-900 to-blue-400">
                <h1 className="w-full text-4xl tracking-widest text-center my-6">Signup Here</h1>
                <Form className="m-5 w-5/6">
                    <div className="w-full my-6">
                        <Field type="email" name="email" className="p-2 rounded text-black shadow w-full" placeholder="Email or UserName"/>
                        <ErrorMessage name="email"/>
                       
                    </div>
                    <div className="w-full my-6">
                        <Field type="password" name="password" className="p-2 rounded shadow w-full text-black" placeholder="Password" />
                        <ErrorMessage name="password"/>
                    </div>
                    <div className="w-full my-10">
                        <button type="submit" className="p-2 rounded shadow border-blue-100 w-full bg-gradient-to-r from-gray-900 to-blue-300 text-white">
                            Signup
                        </button>
                    </div>
                </Form>
            </div>
        </div>
        }
        </Formik>
     )
}
