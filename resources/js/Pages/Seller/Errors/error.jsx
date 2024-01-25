import React from 'react'

import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import {Heading} from '@/Components/heading';

export default function error(error) {
  return (
    <>
    <Navigation />
    <div className="flex">
      <AppSidebar />
    <div className=" flex-1 p-7">
    <Heading>Error</Heading>
    <div className="flex flex-wrap">
    <div className="basis-full flex-wrap ">
            Error Found here
            {error}
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
