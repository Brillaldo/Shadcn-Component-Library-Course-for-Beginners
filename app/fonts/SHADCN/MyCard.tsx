import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

function MyCard({title, description, content, footer}:{title:string, description:string, content:React.ReactNode, footer:React.ReactNode}) {
  return (
    <Card>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>
    {content}
  </CardContent>
  <CardFooter>
    {footer}
  </CardFooter>
</Card>

  )
}

export default MyCard
