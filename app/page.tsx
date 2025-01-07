import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
        <h1 className='text-2xl text-violet-900'>
            HomePage
        </h1>
        <Link href="/properties">Link a /properties</Link>
    </div>
  )
}
