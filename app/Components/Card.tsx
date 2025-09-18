import React from 'react'
interface Props {
  title?: string;
  icon?: React.ReactNode;
  value?: number;
  unit?:string;
  chart?:React.ReactNode;
  Header?:React.ReactNode;
  body?:React.ReactNode;
  footer?:React.ReactNode;
  children?:React.ReactNode;
  className?:string;
}
function Card({ title,className,icon,value,unit,chart,Header,body,footer,children,...rest }: Props) {
  return (
    <div className={`flex flex-col w-fit  text-black gap-4 p-4 border-2 border-gray-500  rounded-lg ${className}`} {...rest}>
        {title && icon && (
          <div className='flex items-center w-full justify-between'>
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="text-3xl">{icon}</div>
          </div>
        )}
        {title && !icon && <div className="text-lg font-semibold">{title}</div>}
        {value && unit && (
          <div className="text-6xl w-full">
            {value}
            <span className="text-gray-500 text-sm">{unit}</span>
          </div>
        )}
        {chart && <div className="h-32">{chart}</div>}
        {Header && <div className="font-bold">{Header}</div>}
        {body && <div>{body}</div>}
        {footer && <div className="text-sm text-gray-500">{footer}</div>}
        {children}
    </div>
  )
}

export default Card