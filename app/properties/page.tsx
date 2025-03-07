import React from 'react';
import Link from 'next/link';
import { PropertyModel } from '@/Model/Property';
import properties from '@/Themes/properties.json';

export default function PropertiesPage() {
  return (
    <div>
        <h1 className='text-2xl text-green-900 font-bold'>
            PropertiesPage
        </h1>
        <Link href="/">Link a Home</Link>
    </div>
  )
}
