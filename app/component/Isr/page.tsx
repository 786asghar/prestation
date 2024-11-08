import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ISR from "@/app/component/Images/ISR.png"

function Isr() {
  return (
    <div>
         <Link href="/"></Link> 
      <Image  src={ISR}
       alt="ISR" bg-cover
        />

    </div>
  )
}

export default Isr