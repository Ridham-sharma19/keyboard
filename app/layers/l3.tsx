import React from 'react'


import UpDownbtn from '../component/updownlogo'
import Leftonebtn from '../component/leftl1'



export default function L3() {
  return (
    <div className='flex items-center gap-2  w-full'>
        <Leftonebtn title='tab'></Leftonebtn>

      <UpDownbtn title='Q' ></UpDownbtn>
      <UpDownbtn title='W'></UpDownbtn>
      <UpDownbtn title='E'></UpDownbtn>
      <UpDownbtn title='R'></UpDownbtn>
      <UpDownbtn title='T'></UpDownbtn>
      <UpDownbtn title='Y'></UpDownbtn>
      <UpDownbtn title='U'></UpDownbtn>
      <UpDownbtn title='I'></UpDownbtn>
      <UpDownbtn title='O'></UpDownbtn>
      <UpDownbtn title='P'></UpDownbtn>
      <UpDownbtn title='[' icon='{'></UpDownbtn>
      <UpDownbtn title=']' icon='}'></UpDownbtn>
      <UpDownbtn title='\' icon='|'></UpDownbtn>
     
    </div>
  )
}
