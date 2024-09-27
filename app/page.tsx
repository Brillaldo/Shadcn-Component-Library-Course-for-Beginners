'use client'


import React from 'react'
//import TwoPaneScreen from './app/components/TwoPaneScreen'
import MyAccordion from './fonts/SHADCN/MyAccordion'
import MyAlert from './fonts/SHADCN/MyAlert'
import { useSearchParams } from 'next/navigation'
import MyAlertDialog from './fonts/SHADCN/MyAlertDialog'
import MyAspectRadio from './fonts/SHADCN/MyAspectRadio'

function Page() {

  const Params = useSearchParams()

  const balance = Params.get("balance")



  return (
    <div className='w-[200px]'>
      <MyAccordion/>

      {
        balance=='0'? <MyAlert/> :""
      }
      
      <MyAlertDialog trigger='CODE UWI' title='Coded Uwi' content={<MyAccordion/>}/>
      <MyAlertDialog trigger='CODE DESIGN' title='Coded Design' content={ <MyAlert/>}/>

      <MyAspectRadio/>



    </div>

  )
}

export default Page
