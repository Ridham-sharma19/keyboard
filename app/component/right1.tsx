import React, { ReactElement } from 'react'

interface btnprops{
    title:string,
    icon?:ReactElement,
    
}



export default function Rightonebtn({title,icon}:btnprops) {
  return (
     <div className='flex w-24 h-14 pt-2 flex-col gap-1 my-btn  '>
       
        
  <div className="  text-xs flex items-end pt-5 px-2 justify-end  text-white">
    <span className="block ">{title}</span>
  </div>
</div>



 
  )
}
