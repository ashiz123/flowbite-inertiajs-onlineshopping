import React from 'react'

export  function Heading({children}) {
  return (
    <h1 className='text-cyan-700 text-3xl font-bold mb-5'>{children}</h1>
  )
}

export function Sub_heading({children})
{
   return(
    <div className="mb-4 text-2xl text-cyan-700" >{children}</div>
   )
}

export function Error_heading({children})
{
   return(
    <div className="mb-4 text-4xl text-red-700" >{children}</div>
   )
}
