import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SSG from "@/app/component/Images/SSG.png"

function Ssg() {
  return (
    <div>
        <Link href="/Home"></Link>
      <Image bg-cover src={SSG}
       alt="SSG" 
        />

    </div>
  )
}

export default Ssg