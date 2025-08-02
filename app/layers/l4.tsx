import React from 'react'


import UpDownbtn from '../component/updownlogo'

import RightTwobtn from '../component/right2'
import LeftTwobtn from '../component/left2'



export default function L4() {
  return (
    <div className='flex items-center gap-2  w-full'>
        <LeftTwobtn title='caps lock'></LeftTwobtn>

      <UpDownbtn title='A'></UpDownbtn>
      <UpDownbtn title='S'></UpDownbtn>
      <UpDownbtn title='D'></UpDownbtn>
      <UpDownbtn title='F'></UpDownbtn>
      <UpDownbtn title='G'></UpDownbtn>
      <UpDownbtn title='H'></UpDownbtn>
      <UpDownbtn title='J'></UpDownbtn>
      <UpDownbtn title='K'></UpDownbtn>
      <UpDownbtn title='L'></UpDownbtn>
      <UpDownbtn title=';' icon=':'></UpDownbtn>
      <UpDownbtn title="'" icon='"'></UpDownbtn>
      <RightTwobtn title='return'></RightTwobtn>
     
    </div>
  )
}
