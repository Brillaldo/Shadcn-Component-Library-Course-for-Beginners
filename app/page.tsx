'use client'


import React from 'react'
//import TwoPaneScreen from './app/components/TwoPaneScreen'
import MyAccordion from './fonts/SHADCN/MyAccordion'
import MyAlert from './fonts/SHADCN/MyAlert'
import { useSearchParams } from 'next/navigation'
import MyAlertDialog from './fonts/SHADCN/MyAlertDialog'
import MyAspectRadio from './fonts/SHADCN/MyAspectRadio'
import MyAvatar from './fonts/SHADCN/MyAvatar'
import MyBadge from './fonts/SHADCN/MyBadge'
import MyBreadCrumb from './fonts/SHADCN/MyBreadCrumb'
import MyButton from './fonts/SHADCN/MyButton'
import MyCalendar from './fonts/SHADCN/MyCalendar'
import MyCard from './fonts/SHADCN/MyCard'
import MyCarousel1 from './fonts/SHADCN/MyCarousel1'
import MyCarousel2 from './fonts/SHADCN/MyCarousel2'
import MyCarousel3 from './fonts/SHADCN/MyCarousel3'
import MyCheckBox from './fonts/SHADCN/MyCheckBox'
import MyCollapsible from './fonts/SHADCN/MyCollapsible'

function Page() {

  const Params = useSearchParams()

  const balance = Params.get("balance")



  return (
    <div className='w-screen h-auto flex flex-col gap-20 pt-20 pb-20 p-4 justify-center items-center '>
      <MyAccordion/>

      {
        balance=='0'? <MyAlert/> :""
      }
      
      <MyAlertDialog trigger='CODE UWI' title='Coded Uwi' content={<MyAccordion/>}/>
      <MyAlertDialog trigger='CODE DESIGN' title='Coded Design' content={ <MyAlert/>}/>

      <MyAspectRadio/>

      <MyAvatar/>

      <MyBadge title='coded design' variant='destructive'  />
    
      <MyBreadCrumb/>
      <MyButton title='Save'/>
      <MyButton title='Cancel'/>
      <MyCalendar/>
      <MyCard content={<MyCalendar/>} footer={
        <MyButton title='Save'/>
      }
       
      
      title='Calendar' description='Calculate days between two dates'/>
      <MyCarousel1/>
      <MyCarousel2/>
      <MyCarousel3/>
      <MyCheckBox/>
      <MyCollapsible/>
    </div>

  )
}

export default Page
