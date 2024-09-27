'use client'


import React from 'react'
//import TwoPaneScreen from './app/components/TwoPaneScreen'
import MyAccordion from './fonts/SHADCN/MyAccordion'
import MyAlert from './fonts/SHADCN/MyAlert'
import { useSearchParams } from 'next/navigation'

function Page() {

  const Params = useSearchParams()

  const balance = Params.get("balance")



  return (
    <div className='w-[200px]'>
      <MyAccordion/>

      {
        balance=='0'? <MyAlert/> :""
      }
      
    </div>
  )
}

export default Page
