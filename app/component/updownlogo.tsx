import React, { ReactElement } from 'react'

interface btnprops{
    title:string,
    icon?:ReactElement|string,
    
}



export default function UpDownbtn({title,icon}:btnprops) {
  return (
    <div className='flex flex-col w-14 p-2 h-14  items-center justify-center max-w-18 pt-2  gap-1 my-btn  '>
        <div className='flex items-center text-white justify-center'>
            {icon}

        </div>
        
  <div className="  text-xs p-1 flex items-center justify-center text-white">
    <span className="block">{title}</span>
  </div>
</div>



 
  )
}