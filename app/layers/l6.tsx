import React from 'react'





import LastLeftbtn from '../component/lastlest'
import SpaceBar from '../component/spacebar'
import RightLastbtn from '../component/rightlast'
import Cleft from '../component/cleft'
import Cright from '../component/cright'
import Arrow from '../component/arrow'



export default function L5() {
  return (
    <div className='flex items-center gap-2  w-full'>
        <LastLeftbtn title='fn' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h16.8"></path><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>}></LastLeftbtn>
        <LastLeftbtn title='control' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M6 15l6 -6l6 6"></path></svg>}></LastLeftbtn>
        <LastLeftbtn title='option' icon={<svg fill="none" version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-[14px] w-[14px]"><rect stroke="white" strokeWidth="2" x="18" y="5" width="10" height="2"></rect><polygon stroke="white" strokeWidth="2" points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "></polygon><rect id="_Transparent_Rectangle_" className="st0" width="32" height="32" stroke="none"></rect></svg>}></LastLeftbtn>
        <Cleft title='command' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path></svg>}></Cleft>
        <SpaceBar></SpaceBar>
        <Cright title='command' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path></svg>} ></Cright>
        <RightLastbtn title='option' icon={<svg fill="none" version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-[14px] w-[14px]"><rect stroke="white" strokeWidth="2" x="18" y="5" width="10" height="2"></rect><polygon stroke="white" strokeWidth="2" points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "></polygon><rect id="_Transparent_Rectangle_" className="st0" width="32" height="32" stroke="none"></rect></svg>} ></RightLastbtn>
        <Arrow ></Arrow>
        
        

     
    
      
     
    </div>
  )
}
