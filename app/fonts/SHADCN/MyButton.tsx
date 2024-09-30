import React from 'react'

import { Button } from "@/components/ui/button"
import { title } from 'process'


function MyButton({title}:{title:string}) {
  return (
    <Button variant="destructive">{title}</Button>

  )
}

export default MyButton
