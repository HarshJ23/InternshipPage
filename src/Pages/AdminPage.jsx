import React from 'react';
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function AdminPage() {

    const auth = getAuth();
    const navigate = useNavigate();

    function onLogout() {

        try {
            
            auth.signOut();
            navigate("/");
            toast.success("Signed out")
            
        } catch (error) {
            toast.error("some error occured");
        }
      }


  return (
    <div>
      profile page
      <button className="btn btn-primary" onClick={onLogout}>Sign Out</button>
    </div>
  )
}
