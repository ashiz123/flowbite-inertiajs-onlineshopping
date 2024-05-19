import React, { useState } from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function Navigation({ children, notifications }) {

  const { auth } = usePage().props
  const [toggle, setToggle] = useState(false);

  console.log(auth);

  function handleNotificationDropdown()
  {
    setToggle(!toggle);
  }
   

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

          {/* <button id="dropdownDefaultButton"  style={{ inset :'7% auto auto auto'}} onClick={handleNotificationDropdown} data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
          </button> */}


          {/* <div id="dropdown" class= {`z-10 relative ${toggle ? "block " : "hidden"}  bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700`}>
            <ul>
              {
                notifications.map((notification, i) => {
                  return (
                    <li>
                      {notification.data.message}
                    </li>
                  )
                })
              }
            </ul>
          </div> */}

      </Navbar.Link>
    </Navbar.Collapse>
    </Navbar>
  )
}
