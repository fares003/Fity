import React from 'react'
import { LinkType } from '../../Types/LinksType';
type HeaderProps = {
  links: LinkType[];
  icon: React.ReactNode;
  className?: string;
    LinksStyle?: string; 
};
const Header: React.FC<HeaderProps> = ({ links, icon, className,LinksStyle }) => {
  return (
    <div className={`flex justify-between items-center p-4 bg-blue-500  ${className}`}>
        <div className='text-lg font-bold max-w-sm'>
          {icon}
        </div>
        <div className={`text-lg font-bold flex justify-between items-center ${LinksStyle}`}>

      {links.map(link => (
        <a key={link.url} href={link.url}>
          {link.label}
        </a>
      ))}
      </div>
    </div>
  )
}

export default Header