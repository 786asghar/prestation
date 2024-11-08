import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CSR from "@/app/component/Images/CSR.png"
import SSR from "@/app/component/Images/SSR.png"

 function Header() {
  return (
    <div>
      
      <nav className="bg-blue-950 flex justify-items-center  h-5 p-6">
       <ul className="flex gap-10 justify-evenly space-x-36 px-24 from-neutral-600 list-none text-gray-200 font-semibold">

      
            <Link href="/"><li>RENDRENING</li></Link>
            <Link href="/component/Ssg"><li>SSG</li></Link>
            <Link href="/component/Ssr"><li>SSR</li></Link>
            <Link href="/component/Isr"><li>ISR</li></Link>
            <Link href="/component/Crs"><li>CSR</li></Link>
         </ul>
         </nav>
     </div>
    
  )
}

export default Header
