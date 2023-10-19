import React from 'react'
import Image from 'next/image'
import {HomeIcon, PlusIcon, SearchIcon, StarIcon} from '@heroicons/react/solid'

function Header() {
  return (
    <div className='sticky bg-[#040714] h-[72px] z-[1000] flex items-center px-10 md:px-12 top-0 w-full'>
        <Image src="/images/logo.svg" height={80} width={80} alt='My logo' className='cursor-pointer' />
        <div className='ml-10 md:flex hidden items-center space-x-6 '>
            <a className='header-link group'>
                <HomeIcon className='text-white h-5'/>
                <span className='span'>Home</span>
            </a>
            <a className='header-link group'>
                <SearchIcon className='text-white h-5'/>
                <span className='span'>Search</span>
            </a>
            <a className='header-link group'>
                <PlusIcon className='text-white h-5'/>
                <span className='span'>Watchlist</span>
            </a>
            <a className='header-link group'>
                <StarIcon className='text-white h-5'/>
                <span className='span'>Originals</span>
            </a>
            <a className='header-link group'>
                <img src='/images/movie-icon.svg' height={32} width={32} />
                <span className='span'>Movies</span>
            </a>
            <a className='header-link group'>
            <img src='/images/series-icon.svg' height={32} width={32} />

                <span className='span'>Series</span>
            </a>
        </div>
        <button className='ml-auto px-4 end py-1.5 border rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'>Login</button>
    </div>
  )
}

export default Header