'use client'
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
  // https://api.shope.com.bd/api/v1/public/hero-categories

const NavMenu =  () => {
  // let data = await fetch('https://api.shope.com.bd/api/v1/public/hero-categories');
  // const menuItems = await data.json();
  // console.log(menuItems);
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <div className="">
            Categories ▼
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Here</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>There link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

  )
}

export default NavMenu