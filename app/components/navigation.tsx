'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import SearchBar from './search-bar';

const Navigation = () => {
  const activePath = usePathname();

  return (
    <div >
      <div className="top-nav bg-gray-100 flex justify-between px-40 py-2 text-xs">
        <div className="top-left-nav">
          <ul className='list-none flex'>
            <li className='pr-10 text-red-400 flex items-center'>
              <span className='pr-3'>English</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            </li>
            <li className='pr-10'>Help Center</li>
            <li className='pr-10'>Helpline: 0170000000</li>
          </ul>
        </div>
        <div className="top-right-nav">
          <ul className='list-none flex'>
            <li className='pl-10'>Become a Seller</li>
            <li className='pl-10'>Order Track</li>
            <li className='pl-10'><Link href='/registration' className={activePath === '/registration' ? 'text-red-400 font-bold' : 'text-red-400'}>Sign Up / Login</Link></li>
          </ul>
        </div>
      </div>

        <div className="primary-nav bg-white px-40 flex">
            <div className='pr-5'>
              <Link href='/' className={activePath === '/' ? 'text-red-400' : ''}>
                <Image
                  src="/logo.png"
                  width={150}
                  height={0}
                  alt="Alzaf"
                />
              </Link>
            </div>
            <div className='flex-grow self-center'>
              <SearchBar/>
            </div>
        </div>
    </div>
  )
}

export default Navigation