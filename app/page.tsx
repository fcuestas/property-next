import React from 'react';
import Hero from '@/components/hero';
import InfoBoxes from '@/components/info-boxes';
import HeroProperties from '@/components/hero-properties';

export default function HomePage() {
  return (
    <>
      <Hero/>
      <InfoBoxes/>
      <HeroProperties/>
    </>
  )
}
