import React from 'react'


import UpDownbtn from '../component/updownlogo'


import LeftThreebtn from '../component/left3'
import RightThreebtn from '../component/right3'



export default function L5() {
  return (
    <div className='flex items-center gap-2  w-full'>
        <LeftThreebtn title='shift'></LeftThreebtn>

      <UpDownbtn title='Z'></UpDownbtn>
      <UpDownbtn title='X'></UpDownbtn>
      <UpDownbtn title='C'></UpDownbtn>
      <UpDownbtn title='V'></UpDownbtn>
      <UpDownbtn title='B'></UpDownbtn>
      <UpDownbtn title='N'></UpDownbtn>
      <UpDownbtn title='M'></UpDownbtn>
      <UpDownbtn title=',' icon='<'></UpDownbtn>
      <UpDownbtn title='.' icon='>'></UpDownbtn>
      <UpDownbtn title='/' icon='?'></UpDownbtn>
    
      <RightThreebtn title='shift'></RightThreebtn>
     
    </div>
  )
}
