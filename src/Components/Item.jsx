import React from 'react'
import {MdLocationOn} from 'react-icons/md' ;
import {HiOfficeBuilding} from 'react-icons/hi';
import {BiRupee} from 'react-icons/bi';
import {BsCalendarDayFill} from 'react-icons/bs';

export default function Item() {
  return (
    <div >
      <div className="card w-96 bg-white  text-black my-2 z-5 hover:shadow-purple-500 shadow-md active:shadow-purple-500 hover:cursor-pointer ">
  <div className="card-body">

<div className='leading-2'>
    <p className="font-bold text-lg">Motion graphics designer</p>
    <p className='text-slate-400 font-semibold '>Xapo visuals</p>
</div>

<div>
    <p className='font-semibold text-base'>React , Tailwind css </p>
</div>

    <div className="card-actions justify-end mt-2">
   
   <div className='grid grid-cols-2 gap-x-36 gap-y-4 auto-cols-max text-xs'>
<p className='flex flex-row items-center space-x-1'><MdLocationOn className='h-4 w-4 text-purple-600'/><p  className='font-semibold text-sm'>Pune</p></p>
<p className='flex flex-row items-center space-x-1'><HiOfficeBuilding className='h-4 w-4 text-purple-600'/><p className='font-semibold text-sm'>Remote</p></p>
<p className='flex flex-row items-center space-x-1'> <BiRupee className='h-4 w-4 text-purple-600'/><p className='font-semibold text-sm'>10-30K</p></p>
<p className='flex flex-row items-center space-x-1'><BsCalendarDayFill className='h-4 w-4 text-purple-600'/><p className='font-semibold text-sm'>1-3 months</p></p>
   </div>

    </div>
  </div>
</div>
    </div>
  )
}
