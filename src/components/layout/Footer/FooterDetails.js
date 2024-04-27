import Image from 'next/image'
import React from 'react'
import FooterLinks from '@/components/layout/Footer/FooterLinks'

export default function FooterDetails() {
  return (
    <div className="  flex lg:flex-row flex-col lg:gap-12 gap-6 container-sk">
      <div className="lg:w-5/12 w-full ">
        <div>
        <Image
          src="/logo.png"
          alt="Logo"
          className="my-auto"
          width={150}
          height={150}
          priority
        />
        </div>

        <p className=" lg:text-lg md:text-base text-sm my-8">
         Welcome to bemgroup
        </p>

        
      </div>

      <div className="lg:w-7/12 w-full ">
        <FooterLinks/>
      </div>
    </div>
  )
}
