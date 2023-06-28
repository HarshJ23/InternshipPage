import React from 'react'

export default function Main(props) {
  return (

    
        <div className="bg-white flex flex-col justify-start gap-3 relative w-full h-[1000px] items-start rounded-lg mt-4 z-2 shadow-lg">
  <div className="self-end flex flex-row justify-start mb-5 gap-6 relative w-full items-end">

   

    <div className="relative flex flex-col justify-end mr-56 pt-6 w-1/3 items-start ml-14">
      <div className="whitespace-nowrap text-xl  font-bold text-black absolute top-0 left-0 h-8 w-[268px]">
    {props.title}
      </div>
      <div className="whitespace-nowrap text-sm  font-semibold text-[#667085] relative">
        {props.name}
      </div>
    </div>

    <div className="rounded-bl-[50px] bg-[#ebe9fe] self-start flex flex-col justify-center mb-4 pr-8 relative w-1/4 h-12 items-end">
      <div className="whitespace-nowrap text-xl  font-bold leading-[14px] text-[#6838ee] relative">
        {props.domain}
      </div>
    </div>

  </div>
  <div className="flex flex-row justify-start ml-8 gap-3 relative items-center py-0">

    <img
      src="https://file.rendit.io/n/wybB3Pfv1Jjvr6BbXapD.svg"
      className="min-h-0 min-w-0 relative w-8 shrink-0 mr-px my-px"
    />
    <div className="whitespace-nowrap text-sm font-medium leading-[14px] text-black justify-start mr-6 relative">
     {props.duration} Months
      <div className="text-sm  font-semibold leading-[14px] text-black contents">
        <br />
      </div>
      <div className="text-sm  font-light leading-[14px] text-black contents">Duration</div>
    </div>

    <img
      src="https://file.rendit.io/n/T5a6WzuhXth1kjO5ZD3v.svg"
      className="min-h-0 min-w-0 mr-1 relative w-8 shrink-0"
    />
    <div className="whitespace-nowrap text-sm  font-medium leading-[14px] text-black justify-start mr-5 relative">
      {props.stipend}
      <div className="text-sm  font-semibold leading-[14px] text-black contents">
        <br />
      </div>
      <div className="text-sm  font-light leading-[14px] text-black contents">Stipend</div>
    </div>

    <img
      src="https://file.rendit.io/n/2ozksuyzf1ggJk7sgL2T.svg"
      className="min-h-0 min-w-0 relative w-8 shrink-0"
    />
    <div className="text-sm  font-medium leading-[14px] text-black justify-start relative">
      {props.location}
      <div className="text-sm font-['Poppins'] font-semibold leading-[14px] text-black contents">
        <br />
      </div>
      <div className="text-sm  font-light leading-[14px] text-black contents">Location</div>
    </div>

    <img
      src="https://file.rendit.io/n/2ozksuyzf1ggJk7sgL2T.svg"
      className="min-h-0 min-w-0 relative w-8 shrink-0"
    />
    <div className="text-sm  font-medium leading-[14px] text-black justify-start relative">
      {props.mode}
      <div className="text-sm font-['Poppins'] font-semibold leading-[14px] text-black contents">
        <br />
      </div>
      <div className="text-sm  font-light leading-[14px] text-black contents">Mode</div>
    </div>

    <img
      src="https://file.rendit.io/n/i6Cr0uXIb8VPaKSFS9RO.svg"
      className="min-h-0 min-w-0 relative w-8 shrink-0 mr-px my-px"
    />
    <div className="whitespace-nowrap text-sm  font-medium leading-[14px] text-black justify-start mr-3 relative">
      9 Days Ago
      <div className="text-sm  font-semibold leading-[14px] text-black contents">
        <br />
      </div>
      <div className="text-sm  font-light leading-[14px] text-black contents">Posted</div>
    </div>

  </div>


  <div className="border-solid border-[#d0d5dd] relative w-[593px] h-px shrink-0 mb-0 ml-12 border-t border-b-0 border-x-0" />
  <div className="flex flex-row justify-start gap-3 relative w-5/6 items-center mb-12 ml-8">
    {/* <img
      src="https://file.rendit.io/n/i6Cr0uXIb8VPaKSFS9RO.svg"
      className="min-h-0 min-w-0 relative w-8 shrink-0 mr-px my-px"
    />
    <div className="whitespace-nowrap text-sm  font-medium leading-[14px] text-black justify-start mr-3 relative">
      9 Days Ago
      <div className="text-sm  font-semibold leading-[14px] text-black contents">
        <br />
      </div>
      <div className="text-sm  font-light leading-[14px] text-black contents">Posted</div>
    </div> */}
    
  </div>

  <div className="flex flex-row justify-start gap-4 relative items-center mb-2 ml-8">
    <div className="bg-[#f2f4f7] flex flex-col justify-start mr-px relative w-32 shrink-0 items-center px-5 py-1 rounded-[20px]">
      <div className="text-sm  font-medium text-black relative">
       {props.skills}
      </div>
    </div>

    <div className="bg-[#f2f4f7] flex flex-col justify-start mr-px relative w-32 shrink-0 items-center px-6 py-1 rounded-[20px]">
      <div className="text-sm  font-medium text-black relative">
        ReactJS
      </div>
    </div>

    <div className="bg-[#f2f4f7] flex flex-col justify-start relative w-32 shrink-0 items-center px-6 py-1 rounded-[20px]">
      <div className="text-sm  font-medium text-black relative">
        ExpressJS
      </div>
    </div>

    <div className="bg-[#f2f4f7] flex flex-col justify-start relative w-32 shrink-0 items-center px-5 py-1 rounded-[20px]">
      <div className="whitespace-nowrap text-sm  font-medium text-black relative">
        Mongo DB
      </div>
    </div>

  </div>

  <div className="bg-[#f2f4f7] flex flex-col justify-start relative items-center mb-4 ml-8 px-3 py-1 rounded-[20px]">
    <div className="whitespace-nowrap text-sm  font-medium text-black mr-1 relative">
      Clean Architecture
    </div>
  </div>


  <div className="relative flex flex-col justify-start w-2/3 items-end mb-24 ml-8 pt-[108px] pb-56 px-64">
    <div className="whitespace-wrap   font-bold text-black absolute top-0 left-0 justify-start h-[391px] w-[726px]">
      <p className='text-lg'>Description</p>

      <p className='text-clip font-semibold'>
          {props.description}
        </p>
      </div>
    </div>
  </div>


 )
}
