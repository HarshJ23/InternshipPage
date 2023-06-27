import React from 'react'
import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
  import { db } from "../firebase";
  import { doc, serverTimestamp, setDoc } from "firebase/firestore";
  import toast from "react-hot-toast";

export default function AdminAuth() {

const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });

      const {name , email , password} = formData;

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
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
    
          updateProfile(auth.currentUser, {
            displayName: name,
          });
          const user = userCredential.user;
          const formDataCopy = { ...formData };
          delete formDataCopy.password;
          formDataCopy.timestamp = serverTimestamp();
    
          await setDoc(doc(db, "users", user.uid), formDataCopy);
          toast.success("Sign up was successful");
          navigate("/adminlogin");
        } catch (error) {
          toast.error("Something went wrong with the registration");
        }
      }
  return (
    <div>
    <div className=" mt-6">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">

        <h2 className='text-center font-bold text-2xl'> Admin Registration</h2>
        {/* <div className="form" onSubmit={submitHandler}> */}
        <form  className='flex flex-col space-y-4' onSubmit={onSubmit}>


<div className='form-control'>

       <p>name</p>
          <input type="text" placeholder="Name" className="input input-bordered" id="name" value={name} onChange={onChange}  required/>
</div>
      

        
        <div className='form-control'>

         <p>email</p>
          <input type="text" placeholder="email" className="input input-bordered"  id="email" value={email} onChange={onChange}  required/>
        </div>
      
       
       <div className='form-control'>

         <p>Password</p>
          <input type="password" placeholder="password" className="input input-bordered"   id="password" value={password} onChange={onChange} required />
       </div>
       
        
          <button className="btn btn-primary">Register</button>
        
        </form>
        <p className='text-center'>OR</p>

      
        <button className="btn btn-primary"><Link to="/adminlogin">Login</Link></button>
       
    {/* </div> */}
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
