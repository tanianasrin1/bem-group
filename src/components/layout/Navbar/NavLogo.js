import Image from 'next/image'
import React from 'react'

export default function NavLogo() {
  return (
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
  )
}
