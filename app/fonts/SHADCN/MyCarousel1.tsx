import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import MyAspectRadio from './MyAspectRadio'
  

function MyCarousel1() {
  return (
    <Carousel className=' w-[200px]'>
  <CarouselContent>
    <CarouselItem><MyAspectRadio/></CarouselItem>
    <CarouselItem><MyAspectRadio/></CarouselItem>
    <CarouselItem><MyAspectRadio/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  )
}

export default MyCarousel1
