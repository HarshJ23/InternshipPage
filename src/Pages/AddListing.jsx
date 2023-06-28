import React from 'react'
import {useState} from "react";
import { getAuth } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";




export default function AddListing() {

    const auth = getAuth();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        // category : "Sports" , 
        name:"",
        title: "",
        location:"",
        domain:"",
        description:"",
        skills :"",
    });
        const {name,title,location,domain, description , skills } = formData;
        
        const [selectedDuration, setSelectedDuration] = useState("1-3");
        const [selectedStipend , setSelectedStipend] =  useState("Unpaid");
        const [selectedMode , setSelectedMode] =  useState("OnSite");
        // const textareaRef = userRef(null);
        // const blogContent = true ;


        function handleChange(e){
            let boolean = null ; 
            
            // if(e.target.files)
            // {
            //   setFormData((prevState) => ({
            //     ...prevState,
            //     images:e.target.files
            
            
            //   }))
            // }
            
            // for text , boolean , numbers 
              if(!e.target.files)
              {
                setFormData((prevState) => ({
                  ...prevState,
                  [e.target.id] : boolean ?? e.target.value ,
                }));
              }
            
            //   if(blogContent)
            //   {
                  
            //     adjustTextareaHeight();
            //        }
            }

            async function onSubmit(e){
                e.preventDefault();

               
                console.log(formData);

                const formDataCopy = {

                    ...formData, 
                    timestamp:serverTimestamp(),
                    useRef: auth.currentUser.uid,
                    Name: auth.currentUser.displayName, 
                    duration: selectedDuration,
                    stipend : selectedStipend,
                    mode : selectedMode,
                }

                const docRef = await addDoc(collection(db , "listings") , formDataCopy);
console.log("Document written with ID: ", docRef.id);

toast.success("Listing addedsuccessfully");
navigate("/adminprofile");
console.log(formDataCopy);
        }

// const adjustTextareaHeight = () => {
//             const textarea = textareaRef.current;
//             textarea.style.height = 'auto';
//             textarea.style.height = `${textarea.scrollHeight}px`;
//           };


  return (
    <main className='bg-white 454545'>

    <h1 className='text-3xl normal-case font-bold mt-4 ml-4'>Add Internship listing</h1>


<form  class='bg-white px-2' onSubmit={onSubmit} >

<div className='flex flex-col sm:flex-row mt-6 w-full   '>
        
<div class="form-control  flex flex-col  w-full  sm:w-2/3  ">
<input type="text" placeholder="Company display name" id="name" value={name} onChange={handleChange} className="input  text-[#454545]  input-ghost w-full focus:bg-white focus:outline-0 focus:border-l-orange-500 border-2 font-semibold  sm:text-xl text-lg focus:border-y-0 focus:border-r-0 my-2"  />
<input type="text" placeholder="Job title" id="title" value={title} onChange={handleChange}    className="input  text-[#454545]  input-ghost w-full focus:bg-white focus:outline-0 focus:border-l-orange-500 border-2 font-semibold  sm:text-xl text-lg focus:border-y-0 focus:border-r-0 my-2" />

<input type="text" id="location" placeholder="location" value={location} onChange={handleChange}    className=" mb-1 text-[#454545] input input-ghost w-full  focus:bg-white focus:outline-0 focus:border-l-orange-500 border-2 font-semibold  sm:text-base text-xs focus:border-y-0 focus:border-r-0 uppercase" />

<input type="text" id="domain" placeholder="domain" value={domain} onChange={handleChange} className=" my-1 text-[#454545] input input-ghost w-full  focus:bg-white focus:outline-0 focus:border-l-orange-500 border-2 font-semibold  sm:text-base text-xs focus:border-y-0 focus:border-r-0 uppercase" />

<input type="text" id="skills" placeholder="Required skills" value={skills} onChange={handleChange} className=" my-1 text-[#454545] input input-ghost w-full  focus:bg-white focus:outline-0 focus:border-l-orange-500 border-2 font-semibold  sm:text-base text-xs focus:border-y-0 focus:border-r-0 uppercase" />

<textarea 
    //   ref={textareaRef}
      
      id="description" value={description}  onChange={handleChange} 
        className="textarea w-full  mt-12 textarea-ghost  text-[#454545]  focus:outline-0 focus:border-l-orange-500 border-2 focus:border-y-0   focus:border-r-0 focus:bg-white focus:border-l-2 text-sm font-semibold overflow-hidden sm:text-base mb-4" placeholder=" Job Description">
</textarea>
{/* <input type="text" id="description" placeholder="Job description"  className=" text-[#454545] input input-ghost w-full  focus:bg-white focus:outline-0 focus:border-l-orange-500 border-2 font-semibold  sm:text-base text-xs focus:border-y-0 focus:border-r-0" /> */}

</div>


<div className='sm:ml-14  mt-4  mb-3 flex flex-col  items-center'>

<div className="form-control w-full max-w-xs mb-3">
<label className="label">
<span className="label-text">Internship Duration(in months)</span>
</label>

<select 
onChange={(e)=>setSelectedDuration(e.target.value)} value={selectedDuration} className="select select-bordered focus:outline-0 hover:shadow-lg">
<option   value="1-3">1-3</option>
<option  value="3-6">3-6</option>
<option  value="6+">6+</option>
{/* <option  value="Entertainment">Entertainment</option>
<option  value="Startups">Startups</option>
<option  value="Other">Other</option> */}
</select>


<label className="label">
<span className="label-text">Stipend( in ₹ )</span>
</label>
<select 
onChange={(e)=>setSelectedStipend(e.target.value)} value={selectedStipend}  className="select select-bordered focus:outline-0 hover:shadow-lg">
<option   value="Unpaid">Unpaid</option>
<option  value="0-10K">0-10K</option>
<option  value="10-30K">10-30K</option>
<option  value="30-50K">30-50K</option>
<option  value="50-70K">50-70K</option>
<option  value="70K+">70K+</option>
{/* <option  value="Entertainment">Entertainment</option>
<option  value="Startups">Startups</option>
<option  value="Other">Other</option> */}
</select>

<label className="label">
<span className="label-text">Mode of Internship</span>
</label>
<select 
onChange={(e)=>setSelectedMode(e.target.value)} value={selectedMode}  className="select select-bordered focus:outline-0 hover:shadow-lg">
<option   value="OnSite">OnSite</option>
<option  value="Hybrid">Hybrid</option>
<option  value="Remote">Remote</option>
{/* <option  value="Entertainment">Entertainment</option>
<option  value="Startups">Startups</option>
<option  value="Other">Other</option> */}
</select>

</div>

<div className='mb-10'>
{/* <label className="label"> */}
{/* <span className="label-text">Add Job description doc(only 1)</span>
</label>
<input type="file" id="images"   className="file-input file-input-bordered file-input-primary w-full max-w-xs"  /> */}
</div>


<button type="submit" className="btn btn-outline hover:bg-purple-500  border-purple-500 border-2 text-purple-500 hover:border-purple-500 sm:w-full">ADD</button>


</div>

</div>

</form>

</main>
  )
}

