'use client';
import * as React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

export interface itemsProps  {
  label: string;
  href: string;
  icon: React.ReactNode;
}
export const Sidebar = ({ items, open, setOpen }: { items: itemsProps[]; open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className={`w-full h-screen bg-white shadow-md text-black p-4  transition-all duration-300`}>
      <h2 className={`${open ? '' : 'justify-center'} text-2xl justify-between flex w-full font-bold mb-6`}>{open&& <span> sidebar</span>} <span onClick={() => setOpen(!open)}><GiHamburgerMenu /></span></h2>
      {open &&
      <ul>
        {items.map((item) => (
          <li key={item.href} className="mb-4">
            <a href={item.href} className="flex items-center">
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
}
    </div>
  )
}
