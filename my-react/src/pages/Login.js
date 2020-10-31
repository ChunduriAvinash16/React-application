import React from 'react'

export default function Login() {
    function handleForm(e) {
        e.preventDefault();
        console.log("submitted");
    }
    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-r from-indigo-900 to-blue-400">
                <h1 className="w-full text-4xl tracking-widest text-center my-6">Login</h1>
                <form className="m-5 w-5/6" onSubmit={handleForm}>
                    <div className="w-full my-6">
                        <input type="email" className="p-2 rounded shadow w-full" placeholder="Email or UserName"/>
                    </div>
                    <div className="w-full my-6">
                        <input type="password" className="p-2 rounded shadow w-full" placeholder="Password"/>
                    </div>
                    <div className="w-full my-10">
                        <button type="submit" className="p-2 rounded shadow border-blue-100 w-full bg-gradient-to-r from-gray-900 to-blue-300 text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
