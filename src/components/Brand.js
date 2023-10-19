import React from 'react'
import Image from 'next/image'

function Brand() {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-6 max-w-[1400px] mx-auto'>
        <div className='Brand group relative h-44 w-44'>
            <Image src="/images/disnep.png" alt="Disnep" layout='fill' objectFit='cover'/>
        </div>
    </section>
  )
}

export default Brand