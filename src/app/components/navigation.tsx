'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


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
            <li className='pl-10'><Link href='/register' className={activePath === '/register' ? 'text-red-400 font-bold' : 'text-red-400'}>Sign Up / Login</Link></li>
          </ul>
        </div>
      </div>

        <div className="nav">
            <Link href='/' className={activePath === '/' ? 'text-red-400' : ''}>Alzaf</Link>
        </div>
    </div>
  )
}

export default Navigation

// right icon 
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> */}


// Love icon, user, cart
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg> */}

{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg> */}

{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg> */}



