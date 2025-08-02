import React, { ReactElement } from 'react'

interface btnprops{
    title:string,
    icon?:ReactElement,
    
}



export default function RightLastbtn({title,icon}:btnprops) {
  return (
    <div className='flex flex-col w-14 p-2 h-14  items-center justify-start max-w-18 pt-2  gap-1 last-btn  '>
        <div className='flex items-center w-full justify-start'>
            {icon}

        </div>
        
  <div className="  text-[12px] p-1 flex items-center justify-center text-white">
    <span className="block">{title}</span>
  </div>
</div>



 
  )
}