import React from 'react'


import UpDownbtn from '../component/updownlogo'

import Right1 from '../component/right1'

export default function L2() {
  return (
    <div className='flex items-center gap-2  w-full'>
      <UpDownbtn title='`' icon='~' ></UpDownbtn>
      <UpDownbtn title='1' icon='!'></UpDownbtn>
      <UpDownbtn title='2' icon='@'></UpDownbtn>
      <UpDownbtn title='3' icon='#'></UpDownbtn>
      <UpDownbtn title='4' icon='$'></UpDownbtn>
      <UpDownbtn title='5' icon='%'></UpDownbtn>
      <UpDownbtn title='6' icon='^'></UpDownbtn>
      <UpDownbtn title='7' icon='&'></UpDownbtn>
      <UpDownbtn title='8' icon='*'></UpDownbtn>
      <UpDownbtn title='9' icon='('></UpDownbtn>
      <UpDownbtn title='0' icon=')'></UpDownbtn>
      <UpDownbtn title='-' icon='_'></UpDownbtn>
      <UpDownbtn title='=' icon='+'></UpDownbtn>
      <Right1 title='delete'></Right1>
    </div>
  )
}
