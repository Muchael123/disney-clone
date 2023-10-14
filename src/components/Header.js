import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div className='sticky bg-[#040714] h-[72px] z-[1000] flex items-center px-10 md:px-12 top-0 w-full'>
        <Image src="/images/logo.svg" height={80} width={80} alt='My logo' />
    </div>
  )
}

export default Header