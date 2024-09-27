import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ShieldAlert, Terminal } from 'lucide-react'



function MyAlert() {
  return (
    <Alert variant='destructive'>
        
  <ShieldAlert className="h-4 w-4" />
  <AlertTitle>BANK BALANCE</AlertTitle>
  <AlertDescription>
    Bank balance is = 0
  </AlertDescription>
</Alert>

  )
}

export default MyAlert
