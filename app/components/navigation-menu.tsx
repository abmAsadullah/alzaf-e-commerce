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
  console.log(menuItems);
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <div className="text-xs">
            Categories ▼
          </div>
        </MenubarTrigger>
        <MenubarContent>
            {menuItems.map((item: {
              childrens: any;
              id: number; title: string; 
            }) => (
               !item.childrens ? 
               <MenubarItem>{item.title}</MenubarItem> :
                <MenubarSub>
                  <MenubarSubTrigger key={item.id}>{item.title}</MenubarSubTrigger>
                  <MenubarSubContent>
                    {item.childrens.map((subItem: { 
                      title: string; childrens: any;
                     }) => (
                      !subItem.childrens ? 
                      <MenubarItem>{subItem.title}</MenubarItem>:
                      <MenubarSub>
                        <MenubarSubTrigger>{subItem.title}</MenubarSubTrigger>
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