import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdDownload } from "react-icons/md";



function SideBar() {
  return (
    <div className="px-5 w-[15%]">

      
   <div className=" space-y-3 items-center">

    <div className="flex items-center space-x-6 cursor-pointer text-xl  hover:bg-gray-300 duration-300 rounded-xl p-1">
     <GoHome/>
     <span>Home</span>
    </div>
 
 {/* make a button of Shorts */}

     <div className="flex items-center space-x-6 cursor-pointer text-xl  hover:bg-gray-300 duration-300 rounded-xl p-1">
     <SiYoutubeshorts />

     <span>Shorts</span>
    </div>

    {/* make a button of Subscritption */}
     <div className="flex items-center space-x-6 cursor-pointer text-xl  hover:bg-gray-300 duration-300 rounded-xl p-1">
   <MdOutlineSubscriptions />
    <span>Subscription</span>
    </div>
    
     {/* make a button of Download */}
 <div className="flex items-center space-x-6 cursor-pointer text-xl  hover:bg-gray-300 duration-300 rounded-xl p-1">
     <MdDownload />
     <span>Download</span>
    </div>

   </div>
     {/* hr tag is used for horizontal line breaking... */}
 <hr/>
    </div>
    

  )
}

export default SideBar
