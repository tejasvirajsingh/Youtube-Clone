import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";




function Nav() {
  return (
    <div className="flex justify-between px-6 py-2  ">
     
      {/* first Div Box */}

  <div className=  " flex items-center space-x-4 ">
    <AiOutlineMenu className="cursor-pointer" size={20}/>
 <img src="/logo.jpg" alt="logo" className="w-20 h-auto" />

</div>
 
 {/* Second Div Box  */}
 
 <div className="flex w-[35%] items-center">
  <div className="flex items-center w-full border rounded-l-full px-3">
    <input
      type="text"
      placeholder="Search"
      className="w-full h-full py-2 outline-none cursor-text"
    />
  </div>

  <button className="px-4 py-2 border cursor-pointer bg-gray-200 rounded-r-full">
    <CiSearch size="22px" />
  </button>

  <IoMdMic
    size="38px"
    className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
  />
</div>

 {/* Third Div Box  */}

  <div className=" flex space-x-5 items-center ">
    <RiVideoAddLine className="text-2xl  cursor-pointer hover:bg-gray-200 duration-300" />
    <AiOutlineBell  className="text-2xl  cursor-pointer hover:bg-gray-200 duration-200" />

   <img src="/maxji.jpg" alt="profile" className="w-6 h-6 rounded-full cursor-pointer      transition-transform duration-200 hover:scale-120" />

  </div>

    </div>
  )
}

export default Nav
