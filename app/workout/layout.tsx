'use client'
import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";
import { Sidebar } from './components/SideBar';

const sidebarItems = [
  { label: 'Home', href: '/', icon: <IoMdHome /> },
  { label: 'Workouts', href: '/workout', icon: <FaDumbbell /> },
];

export default function workoutLayout({children}: {children: React.ReactNode}) {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="min-h-screen flex">
      <div
        className={`transition-all duration-300 ${
          open ? "w-64" : "w-24"
        }`}
      >
        <Sidebar items={sidebarItems} open={open} setOpen={setOpen} />
      </div>

      <div className="flex-1 transition-all h-screen bg-gray-200  p-4 duration-300">

        {children}
      </div>
    </div>
  )
}

