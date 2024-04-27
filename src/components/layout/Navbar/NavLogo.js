import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavLogo() {
  return (
    <Link href="/">
      <Image
          src="/logo.png"
          alt="Logo"
          className="my-auto"
          width={150}
          height={150}
          priority
        />
    </Link>
  )
}
