'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavLinkLogged(
    {
        children,
        href,
        className,
        onClick,
        display=true
    }:{
        children: React.ReactNode,
        href: string,
        className?: string,
        onClick?: () => void,
        display?: boolean
    }
) {
    if(!display) return;
    const pathname = usePathname();
    if (href === pathname)  className = className +  ' bg-black text-white';

    return (
        <Link
            href={href}
            className={className}
            role="menuitem"
            tabIndex={-1}
            onClick={onClick}
          >{children}
        </Link>
    )
}
