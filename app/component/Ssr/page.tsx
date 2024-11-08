import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SSR from "@/app/component/Images/SSR.png"

function Ssr() {
  return (
    <div>
        <Link href="/"></Link>
      <Image  src={SSR}
       alt="SSR" bg-cover
        />

    </div>
  )
}

export default Ssr