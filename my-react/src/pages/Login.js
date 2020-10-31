import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../config/firebase';
export default function Login() {
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({email:"",password:""})
   // const [isLoggedin, setisLoggedin] = useState(false)
    const history=useHistory();
    function handleForm(e) {
        if(isLoading)
            return;
        setisLoading(true);
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(form.email,form.password)
        .then((res)=>{
            history.replace("/");
            setError("")
            setisLoading(false);
        })
        .catch((err)=>{
           // console.log(err);
            setError(err.message);
            setisLoading(false);
        })
    }

    //handling inputs
    function handleInput(e){
        setForm({...form,[e.target.name]:e.target.value})
        //console.log(e.target.value);
    }

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-r from-indigo-900 to-blue-400">
                <h1 className="w-full text-4xl tracking-widest text-center my-6">Login</h1>
                <form className="m-5 w-5/6" onSubmit={handleForm}>
                    {error!=null?<p>{error}</p>:""}
                    <div className="w-full my-6">
                        <input type="email" name="email" className="p-2 rounded text-black shadow w-full" placeholder="Email or UserName" value={form.email} onChange={handleInput}/>
                    </div>
                    <div className="w-full my-6">
                        <input type="password" name="password" className="p-2 rounded shadow w-full text-black" placeholder="Password" value={form.password} onChange={handleInput}/>
                    </div>
                    <div className="w-full my-10">
                        <button type="submit" className="p-2 rounded shadow border-blue-100 w-full bg-gradient-to-r from-gray-900 to-blue-300 text-white">
                         {
                             isLoading ? <i className="fas fa-circle-notch fa-spin"></i>:"Login"
                         }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
