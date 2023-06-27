import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-hot-toast";



export default function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const { email, password } = formData;
      const navigate = useNavigate();
      function onChange(e) {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
      };

      async function onSubmit(e) {
        e.preventDefault();
        try {
          const auth = getAuth();
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          if (userCredential.user) {
            navigate("/");
          }
        } catch (error) {
          toast.error("Invalid credentials. Please try again");
        };
      };

  return (
    <div>
      <div className=" mt-6">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">

        <h2 className='text-center font-bold text-2xl'> Admin Login</h2>
        {/* <div className="form" onSubmit={submitHandler}> */}
        <form  className='flex flex-col space-y-4' onSubmit={onSubmit}>

        <div className='form-control'>

         <p>email</p>
          <input type="text" placeholder="email" className="input input-bordered"   id="email" value={email} onChange={onChange} required/>
        </div>
      
       
       <div className='form-control'>
        <p>Password</p>
          <input type="password" placeholder="password" className="input input-bordered"  id="password" value={password} onChange={onChange} required />
       </div>
       
        
          <button className="btn btn-primary">Login</button>
        
        </form>
      
    {/* </div> */}
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
