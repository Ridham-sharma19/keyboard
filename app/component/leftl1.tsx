import React, { ReactElement } from 'react'

interface btnprops{
    title:string,
    icon?:ReactElement,
    
}



export default function Leftonebtn({title,icon}:btnprops) {
  return (
    <div className='flex w-24 h-14 pt-2 flex-col gap-1 my-btn  '>
       
        
  <div className="  text-xs flex items-end pt-5 px-2 justify-start  text-white">
    <span className="block ">{title}</span>
  </div>
</div>



 
  )
}

// bg-[#0A090D] shadow-[inset_0px_-0.5px_2px_0px_rgb(13,13,15),inset_-0.5px_0px_2px_0px_rgb(13,13,15)]