import React from 'react';
import Image from 'next/image';
import a1Img from '@/assets/images/properties/a1.jpg';
import PropertyCard from './property-card';

export default function HeroProperties() {
  return (
    <>
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </section>

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="properties.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Properties</a>
    </section>
    </>
  )
}
