import React from 'react'
import Selectbtn from '../Components/Selectbtn';
import Search from '../Components/Search';

export default function Home() {
  return (
//     <main className='grid grid-cols-2 gap-4 mx-2'>

// <aside className='my-3  border-red-400 border-2'>
//     <Selectbtn/>
// </aside>

// <div className='border-2 border-red-400 '>
// <Search />

// </div>

//     </main>

<div class="flex">
  <div class="h-screen top-0 sticky p-4 w-1/3 overflow-y-scroll justify-center bg-slate-50 z-10">
    {/* <!-- Note: add overflow-y-scroll if sidebar content is longer than page --> */}
    <div className='top-0 sticky bg-white shadow-xl py-2 rounded-lg'>
   <Selectbtn/>

    </div>
  </div>
  
  <div class="flex-grow p-4  bg-slate-50">

  <div className='top-0 sticky  bg-white shadow-xl py-2 rounded-lg'>
    <Search/>
</div>
    Body <br/><br/><br/><br/>
    That <br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>
  </div>
</div>


  )
}
