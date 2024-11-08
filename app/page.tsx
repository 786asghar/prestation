import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import RENDERING from "@/app/component/Images/Rendering.png"
import Header from './component/Header/page'
import Footer from './component/Footer/page'

import Isr from "@/app/component/Isr/page"
import Ssg from "@/app/component/Ssg/page"
import Csr from "@/app/component/Crs/page"

 import Ssr from '@/app/component/Ssr/page';
function Home() {
  return (
    <div className='w-auto'>
       
      
        
        <Image  src={RENDERING} 
       alt="RENDERING" /> 
   </div>
  )
}

export default Home


