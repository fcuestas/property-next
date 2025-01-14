import React from 'react';
import Link from 'next/link';

export default function InfoBox(
     {
        heading,
        children,
        buttonInfo,
        textColor='text-gray-800',
        backgroudColor
     }:{
        heading: string;
        children: React.ReactNode;
        buttonInfo: {text: string; link: string; backgroudColor: string};
        textColor?: string;
        backgroudColor: string;
     }
) {
  return (
    <div className={`${backgroudColor} p-6 rounded-lg shadow-md`}>
        <h2 className={textColor+" text-2xl font-bold"}>{heading}</h2>
        <p className="mt-2 mb-4">
            {children}
        </p>
        <Link
            href={buttonInfo.link}
            className={`inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700 ${buttonInfo.backgroudColor}`}
        >
            {buttonInfo.text}
        </Link>
    </div>
  )
}
