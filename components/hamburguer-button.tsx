'use client'
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function HamburguerButton() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isLoggedIn = true;
    function handleMobileMenuBlur(){
        setTimeout(() => setIsMobileMenuOpen((prev)=> !prev), 300);
    }
    return (
    <>
        {/* <!-- Mobile menu button--> */}
        <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={()=> setIsMobileMenuOpen((prev) => !prev)}
              onBlur={handleMobileMenuBlur}
        >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
        </button>
         {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-20 min-w-60 text-center left-0 z-10" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 bg-blue-700">
          <Link
            href="/"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            >Home</Link>
          <Link
            href="/properties"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >Properties</Link          >
          <Link
            href="/properties/add"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >Add Property</Link         >
          {!isLoggedIn && <button
            className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4"
          >
            <i className="fa-brands fa-google mr-2"></i>
            <span>Login or Register</span>
          </button>}
        </div>
      </div>}
    </>
  )
}
