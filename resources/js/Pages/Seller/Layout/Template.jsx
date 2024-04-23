import React from 'react'

import { Heading } from '@/Components/heading'
import AppSidebar from '@/Layouts/AppSidebar'
import Navigation from '@/Layouts/Navigation'


export default function Template({pageHeading, children}) {
  return (
    <>
    <Navigation/>
    <div className="flex">
      <AppSidebar />
    <div className=" flex-1 ">
    <Heading>{pageHeading}</Heading>
    <div className="flex-wrap">
     <div className="basis-1/2 p-3">
        {children}
     </div>
     </div>
     </div>
     </div>
     </>
  )
}
