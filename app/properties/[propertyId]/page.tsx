import React from 'react';

export default async function PropertyIdPage(
  {
    params
  }:{
    params: Promise<{propertyId: string}>
  }
) {
  const {propertyId} = (await params);
  return (
    <div>PropertyIdPage:  {propertyId}</div>
  )
}
