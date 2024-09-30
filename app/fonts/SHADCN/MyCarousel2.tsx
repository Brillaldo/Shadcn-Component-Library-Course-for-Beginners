import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MyAspectRadio from './MyAspectRadio'
 

function MyCarousel2() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}

      orientation='vertical'
      className="w-auto "
    >
      <CarouselContent className='-mt-1 h-[400px]'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2 ">
            <div className="p-1">
              
              <MyAspectRadio/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default MyCarousel2
