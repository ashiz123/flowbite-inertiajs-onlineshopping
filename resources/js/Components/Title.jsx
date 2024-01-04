import React from 'react'

export  function Title({children}) {
  return (
    <div>
        <h1 className='text-cyan-700 text-3xl font-bold mb-5'>{children}</h1>
    </div>
  )
}
