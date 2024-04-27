import React from 'react'
import Carousel from '@/components/molecules/Carousel'
import { slides } from "@/data/carouselData.json";

export default function HomePage() {
  return (
    <div>
       <Carousel data={slides}/>
    </div>
  )
}
