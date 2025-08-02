import React from 'react'


import UpDownbtn from '../component/updownlogo'
import Leftonebtn from '../component/leftl1'
import Special from '../component/special'

export default function L1() {
  return (
    <div className='flex items-center gap-2  w-full'>
        <Leftonebtn title='esc'></Leftonebtn>
        <UpDownbtn title='F1' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 5l0 .01"></path><path d="M17 7l0 .01"></path><path d="M19 12l0 .01"></path><path d="M17 17l0 .01"></path><path d="M12 19l0 .01"></path><path d="M7 17l0 .01"></path><path d="M5 12l0 .01"></path><path d="M7 7l0 .01"></path></svg>}></UpDownbtn>
        <UpDownbtn title='F2' icon={<svg width="14" height="14" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 4V2M12 22v-2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M22 12h-2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}></UpDownbtn>
        <UpDownbtn title='F3' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path><path d="M3 10h18"></path><path d="M10 3v18"></path></svg>} ></UpDownbtn>
        <UpDownbtn title='F4' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>} ></UpDownbtn>
        <UpDownbtn title='F5' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path><path d="M5 10a7 7 0 0 0 14 0"></path><path d="M8 21l8 0"></path><path d="M12 17l0 4"></path></svg>} ></UpDownbtn>
        <UpDownbtn title='F6' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>}></UpDownbtn>
        <UpDownbtn title='F7' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M21 5v14l-8 -7z"></path><path d="M10 5v14l-8 -7z"></path></svg>} ></UpDownbtn>
        <UpDownbtn title='F8' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M4 5v14l12 -7z"></path><path d="M20 5l0 14"></path></svg>}></UpDownbtn>
        <UpDownbtn title='F9' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M3 5v14l8 -7z"></path><path d="M14 5v14l8 -7z"></path></svg>} ></UpDownbtn>
        <UpDownbtn title='F10' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path><path d="M16 10l4 4m0 -4l-4 4"></path></svg>}></UpDownbtn>
        <UpDownbtn title='F11' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M15 8a5 5 0 0 1 0 8"></path><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path></svg>}></UpDownbtn>
        <UpDownbtn title='F12' icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]"><path d="M15 8a5 5 0 0 1 0 8"></path><path d="M17.7 5a9 9 0 0 1 0 14"></path><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path></svg>} ></UpDownbtn>
        <Special></Special>
    </div>
  )
}
