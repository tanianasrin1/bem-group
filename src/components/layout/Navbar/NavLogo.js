import Image from 'next/image'
import React from 'react'

export default function NavLogo() {
  return (
    <div>
      <Image
          src="/logo.png"
          alt="Logo"
          className="mx-auto pointer-events-none select-none"
          width={150}
          height={150}
          priority
        />
    </div>
  )
}
