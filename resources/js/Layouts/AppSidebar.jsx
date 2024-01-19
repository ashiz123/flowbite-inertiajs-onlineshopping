import React, {useState} from 'react';
import {Menus } from '@/datas/menus';
import MenuList from '@/Components/MenuList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiArrowLeft} from 'react-icons/hi';
import { Link } from '@inertiajs/react'

export default function AppSidebar() {

    const[open, setOpen] = useState(true);
    const angleDown = <FontAwesomeIcon icon={faAngleDown} />

    function subMenu()
    {
      console.log('submenu');
    }

   return (
    <div
      className={` ${open ? "w-72" : "w-20 "}
      bg-gray-50 h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)} icon = {HiArrowLeft}
      />
      

      <div className="flex gap-x-4 items-center ">
        <img
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-black origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
         <a href="/dashboard">UK Bazaar</a>
        </h1>
      </div>
     
        <span className={`${!open && "hidden"} origin-left duration-200 pt-6 `} onClick = {() => subMenu()}>
        <Sidebar >
        <Sidebar.Items  >
        <Sidebar.ItemGroup >

        <Sidebar.Collapse icon={HiTable} label="Category">
           <Sidebar.Item as={Link} href="/category/create" >
             Create Category
            </Sidebar.Item>
            <Sidebar.Item as={Link} href="/category" >
             Categories
            </Sidebar.Item>
           </Sidebar.Collapse>
       
        <Sidebar.Collapse icon={HiViewBoards} label="Products">
          <Sidebar.Item as={Link}  href={route('product.create')}  >
              Create Product
            </Sidebar.Item>

            <Sidebar.Item as={Link} href={route('product.index')} >
              Products
            </Sidebar.Item>
            </Sidebar.Collapse>

           <Sidebar.Item href="#" icon={HiShoppingBag}>
              Orders
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={HiChartPie}>
              Promotions & Discounts
            </Sidebar.Item>

          </Sidebar.ItemGroup>
          </Sidebar.Items>
          </Sidebar>
          
        </span>

  </div>
  )
}

            
          
        
