import React from 'react';
import {Link } from 'react-router-dom';
import {BiSolidNotepad} from 'react-icons/bi';
import {TbChecklist} from "react-icons/tb";
import {IoIosCreate , IoIosChatboxes} from "react-icons/io";
import {BsFillBellFill} from "react-icons/bs" ;

export default function Header() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg top-0 sticky z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        <li className='text-slate-500 font-bold'><Link className=' hover:text-purple-500  focus:text-purple-500'>Browse Listings</Link></li>
        <li className='text-slate-500 font-bold'>
          <Link>Application History</Link>
        </li>
        <li className='text-slate-500 font-bold'><Link className=' hover:text-purple-500  focus:text-purple-500' >Blog</Link></li>

        <li className='text-slate-500 font-bold'><Link className=' hover:text-purple-500  focus:text-purple-500'>Contact Us</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl font-bold">InternBrand</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='text-slate-500 font-bold'><Link className=' hover:text-purple-500  focus:text-purple-500' to="/"> <BiSolidNotepad/>Browse Listings</Link></li>
      <li className='text-slate-500 font-bold' >
        <Link className=' hover:text-purple-500  focus:text-purple-500'><TbChecklist className='h-4 w-4'/>Application History</Link>
      </li>
      <li className='text-slate-500 font-bold'><Link className=' hover:text-purple-500  focus:text-purple-500'><IoIosCreate className='h-4 w-4'/>Blog</Link></li>

      <li className='text-slate-500 font-bold '><Link className=' hover:text-purple-500  focus:text-purple-500'><IoIosChatboxes className='h-4 w-4'/>Contact Us</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <BsFillBellFill className='mr-4 h-5 w-5 text-purple-500'/>
  </div>
</div>
    </div>
  )
}
