import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";




function Nav() {
  return (
    <div className="flex justify-between px-6 py-2  ">
      
      
  <div className=  " flex items-center space-x-4 border border-black">
    <AiOutlineMenu className="cursor-pointer" size={20}/>
 <img src="/logo.jpg" alt="logo" className="w-20 h-auto" />

</div>
 
 {/* Second Div Box  */}
 
  <div className=" flex w-[35%] border border-black">
    <div className="w-[100%]  px-3 py-2 border rounded-l-full">
<input type="text" placeholder="Search" className="outline-none" />
</div>
<button className="px-3 py-2 border bg-gray-200 rounded-r-full">
<CiSearch size={"22px"} />
</button>
<IoMdMic size={"38px"} className="ml-3 border rounded-full  p-2 cursor-pointer hover:bg-gray-200 duration-200" 
/>


  </div>
 
 {/* Third Div Box  */}

  <div className="border border-black">3</div>

    </div>
  )
}

export default Nav
