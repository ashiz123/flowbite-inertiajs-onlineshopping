import React from 'react'

export default function MenuList({children}) {
  return (
    <li className= "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 m-2" >
        {children}
    </li>
            
          
  )
}
