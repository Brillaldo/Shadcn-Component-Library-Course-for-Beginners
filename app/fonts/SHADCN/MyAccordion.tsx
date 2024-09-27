import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

function MyAccordion() {
  return (
   
 
         <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Coded Design</AccordionTrigger>
    <AccordionContent>
      Is a test
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>Other Coded Design</AccordionTrigger>
    <AccordionContent>
      Learn figma 
    </AccordionContent>
  </AccordionItem>
</Accordion>    
  
  )
}

export default MyAccordion

