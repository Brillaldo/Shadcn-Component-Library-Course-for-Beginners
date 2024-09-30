import React, { useState } from 'react'

import { Checkbox } from "@/components/ui/checkbox"

function MyCheckBox() {

    const [check,setCheck] =useState(false)
  return (
    <Checkbox checked={check} onCheckedChange={()=>{setCheck(!check)}}/>

  )
}

export default MyCheckBox
