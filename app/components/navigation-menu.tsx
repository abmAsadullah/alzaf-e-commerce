// 'use client'
import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"  
import Link from 'next/link';

const NavMenu = async  () => {
  const data = await fetch('https://api.shope.com.bd/api/v1/public/hero-categories');
  const menuItems = await data.json();  
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <div className="text-xs hidden md:block">
              Categories<span className='text-white'>.</span>▼
            </div>
            <div className="block md:hidden text-2xl">
              ☰
            </div>
          </MenubarTrigger>
          <MenubarContent>
              {menuItems.map((item: {
                childrens: [];
                id: number; title: string;  link:string;
              }) => (
                !item.childrens ? 
                <Link href={item.link}><MenubarItem key={item.id}>{item.title}</MenubarItem></Link> :
                <MenubarSub key={item.id}>
                  <Link href={item.link}><MenubarSubTrigger key={item.id}>{item.title}</MenubarSubTrigger></Link>
                  <MenubarSubContent>
                    {item.childrens.map((subItem: { 
                      title: string; childrens: []; id: number; link:string;
                    }) => (
                      !subItem.childrens ? 
                      <Link href={subItem.link}><MenubarItem key={subItem.id}>{subItem.title}</MenubarItem></Link>:
                      <MenubarSub key={subItem.id}>
                        <Link href={subItem.link}><MenubarSubTrigger key={subItem.id}>{subItem.title}</MenubarSubTrigger></Link>
                        <MenubarSubContent>
                          {subItem.childrens.map((subSubItem: { id: number; title: string; link: string;}) => (
                            <Link href={subSubItem.link}><MenubarItem key={subSubItem.id}>{subSubItem.title}</MenubarItem></Link>
                          ))}
                        </MenubarSubContent>
                      </MenubarSub>
                    ))}
                  </MenubarSubContent>
                </MenubarSub>
              ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>

  )
}

export default NavMenu