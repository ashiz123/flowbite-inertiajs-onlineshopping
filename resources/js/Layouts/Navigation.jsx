import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function Navigation({ children }) {

  const { auth } = usePage().props


  return (
    <Navbar fluid rounded> 


    
    <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
       Online shopping
        </span>
      </Navbar.Brand>
      <Navbar.Toggle /> 


    <Navbar.Collapse>
      
       
      <Navbar.Link>
          <Link href="/logout" method="post" as="button" type="button"> {auth.user.name} Logout</Link>
      </Navbar.Link>
    </Navbar.Collapse>
    </Navbar>
  )
}
