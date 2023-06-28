import React from 'react'
import {MdLocationOn} from 'react-icons/md' ;
import {HiOfficeBuilding} from 'react-icons/hi';
import {BiRupee} from 'react-icons/bi';
import {BsCalendarDayFill} from 'react-icons/bs';

export default function Item({id , listing , onClick}) {
  return (
    <div onClick={() => onClick(id)} className='hover:scale-95 duration-200 ease-in-out  '>
      <div className="card w-96 bg-white  text-black my-2 z-5 hover:shadow-purple-500 shadow-md active:shadow-purple-500 hover:cursor-pointer ">
  <div className="card-body">

<div className='leading-2'>
    <p className="font-bold text-lg">{listing.title}</p>
    <p className='text-slate-400 font-semibold '>{listing.name}</p>
</div>

<div>
    <p className='font-semibold text-base'>{listing.skills}</p>
</div>

    <div className="card-actions justify-end mt-2">
   
   <div className='grid grid-cols-2 gap-x-36 gap-y-4 auto-cols-max text-xs'>
<p className='flex flex-row items-center space-x-1'><MdLocationOn className='h-4 w-4 text-purple-600'/><p  className='font-semibold text-sm'>{listing.location}</p></p>
<p className='flex flex-row items-center space-x-1'><HiOfficeBuilding className='h-4 w-4 text-purple-600'/><p className='font-semibold text-sm'>{listing.mode}</p></p>
<p className='flex flex-row items-center space-x-1'> <BiRupee className='h-4 w-4 text-purple-600'/><p className='font-semibold text-sm'>{listing.stipend}</p></p>
<p className='flex flex-row items-center space-x-1'><BsCalendarDayFill className='h-4 w-4 text-purple-600'/><p className='font-semibold text-sm'>{listing.duration} months</p></p>
   </div>

    </div>
  </div>
</div>
    </div>
  )
}
