'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import SearchBar from './navigation-search-bar';
import Heart, { Cart, User } from './icons';
import NavMenu from './navigation-menu';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"  

const Navigation = () => {
  const activePath = usePathname();

  return (
    <div >
      <div className="top-nav bg-gray-100 flex justify-between px-3 md:px-20 lg:px-40 py-2 text-xs">
        <div className="top-left-nav">
          <ul className='list-none flex'>
            <li className='pr-10 text-red-400 flex items-center'>
              <span className='pr-3'>English</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            </li>
            <li className='pr-10 hidden md:block'>Help Center</li>
            <li className='pr-10 hidden md:block'>Helpline: 0170000000</li>
          </ul>
        </div>
        <div className="top-right-nav">
          <ul className='list-none flex items-center'>
            <li className='pl-10 hidden md:block'>Become a Seller</li>
            <li className='pl-10 hidden md:block'>Order Track</li>
            <li className='pl-10'><Link href='/registration' className={activePath === '/registration' ? 'text-red-400 font-bold' : 'text-red-400'}>Sign Up / Login</Link></li>
            <li className='pl-2 block md:hidden'>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className='border-none bg-gray-100'>▼</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem className='text-orange-500'>Our Cloud Service</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Profile</MenubarItem>
                    <MenubarItem>Cart</MenubarItem>
                    <MenubarItem>Wishlist</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Help Center</MenubarItem>
                    <MenubarItem>Helpline: 0170000000</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Become a Seller</MenubarItem>
                    <MenubarItem>Ordar Track</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </li>
          </ul>
        </div>
      </div>

      <div className="primary-nav bg-white px-3 md:px-20 lg:px-40 flex justify-between">
        <div>
          <Link href='/' className='hidden md:block'>
            <Image
              src="/logo.png"
              width={150}
              height={0}
              alt="Alzaf"
            />
          </Link>
          <Link href='/' className='block md:hidden'>
            <Image
              src="/logo.png"
              width={100}
              height={0}
              alt="Alzaf"
            />
          </Link>
        </div>
        <div className='md:self-end self-center'>
          <NavMenu />
        </div>
        <div className='flex-grow self-center mx-5 hidden md:block'>
          <SearchBar/>
        </div>
        <div className='self-center bg-gray-100 rounded-lg p-1 mx-1 hidden md:block'>
          <User/>
        </div>
        <div className='self-center bg-gray-100 rounded-lg p-1 mx-1 hidden md:block'>
          <Heart/>
        </div>
        <div className='self-center bg-gray-100 rounded-lg p-1 mx-1 hidden md:block'>
          <Cart/>
        </div>
        <div className='hidden md:block'>
          <Image
            src="/cloud-icon.png"
            width={150}
            height={0}
            alt="Cloud Service"
          />
        </div>
      </div>
    </div>
  )
}

export default Navigation