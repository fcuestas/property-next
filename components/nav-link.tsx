'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function NavLink(
    {
        children,
        href,
        className,
        onClick
    }:{
        children: React.ReactNode,
        href: string,
        className?: string,
        onClick?: () => void
    }
) {
    const pathName = usePathname();
    if(href === pathName) className = className + ' bg-black';
    return (
        <>
        <Link
            href={href}
            className={className}
            role="menuitem"
            tabIndex={-1}
            onClick={onClick}
        >
            { children }
        </Link>
        </>
        
    
    )
}
