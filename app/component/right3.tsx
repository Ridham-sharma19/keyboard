import React, { ReactElement } from 'react'

interface btnprops{
    title:string,
    icon?:ReactElement,
    
}



export default function RightThreebtn({title,icon}:btnprops) {
  return (
     <div className='flex w-35 h-14 pt-2 flex-col gap-1 my-btn  '>
       
        
  <div className="  text-xs flex items-end  px-2 pt-5 justify-end  text-white">
    <span className="block ">{title}</span>
  </div>
</div>



 
  )
}
