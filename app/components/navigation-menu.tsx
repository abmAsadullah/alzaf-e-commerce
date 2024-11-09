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

const NavMenu = async  () => {
  const data = await fetch('https://api.shope.com.bd/api/v1/public/hero-categories');
  const menuItems = await data.json();  
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <div className="text-xs">
            Categories ▼
          </div>
          {/* <div className="text-xs invisible sm:visible">
            Categories ▼
          </div> */}
        </MenubarTrigger>
        <MenubarContent>
            {menuItems.map((item: {
              childrens: [];
              id: number; title: string; 
            }) => (
               !item.childrens ? 
               <MenubarItem key={item.id}>{item.title}</MenubarItem> :
                <MenubarSub key={item.id}>
                  <MenubarSubTrigger key={item.id}>{item.title}</MenubarSubTrigger>
                  <MenubarSubContent>
                    {item.childrens.map((subItem: { 
                      title: string; childrens: []; id: number;
                     }) => (
                      !subItem.childrens ? 
                      <MenubarItem key={subItem.id}>{subItem.title}</MenubarItem>:
                      <MenubarSub key={subItem.id}>
                        <MenubarSubTrigger key={subItem.id}>{subItem.title}</MenubarSubTrigger>
                        <MenubarSubContent>
                          {subItem.childrens.map((subSubItem: { id: number; title: string }) => (
                            <MenubarItem key={subSubItem.id}>{subSubItem.title}</MenubarItem>
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

  )
}

export default NavMenu