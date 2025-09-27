import { FaDumbbell } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { MdDashboard } from "react-icons/md";

export const sidebarItems = [
  { label: 'Home', href: '/', icon: <IoMdHome /> },
  { label: 'Dashboard', href: '/workout/dashboard', icon: <MdDashboard /> },
  { label: 'Workouts', href: '/workout', icon: <FaDumbbell /> },
];