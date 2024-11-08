import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import CSR from "@/app/component/Images/CSR.png"
import Header from "@/app/component/Header/page"

function Csr() {
  return (
    <div>
        
      <Image  src={CSR}
       alt="CSR" bg-cover/>
      
        

    </div>
  )
}

export default Csr
