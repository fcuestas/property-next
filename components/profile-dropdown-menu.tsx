'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLinkLogged from '@/components/nav-link-logged';
import profileImg from '@/assets/images/profile.png'

export default function ProfileDropdownMenu() {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    function handleProfileMenuBlur(){
        setTimeout(() => setIsProfileMenuOpen(false), 300);
    }
    return (
        <>
        <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  onBlur={handleProfileMenuBlur}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={profileImg}
                    alt=""
                  />
                </button>
              </div>

              {/* <!-- Profile dropdown --> */}
              {isProfileMenuOpen && <div
                id="user-menu"
                className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                <NavLinkLogged
                  href="/profile.html"
                  className="block px-4 py-2 text-sm text-gray-700"
                  >Your Profile</NavLinkLogged  >
                <NavLinkLogged
                  href="saved-properties.html"
                  className="block px-4 py-2 text-sm text-gray-700"
                  >Saved Properties</NavLinkLogged>
                <NavLinkLogged
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  >Sign Out</NavLinkLogged  >
              </div>}
            </div>
        </>
    )
}
