import React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/navbar';

export default function RootLayout(
     {
        children
     }:{
        children: React.ReactNode
     }
) {
  return (
    <html>
        <body>
            <Navbar/>
            <div>{ children }</div>
        </body>
    </html>
  )
}
