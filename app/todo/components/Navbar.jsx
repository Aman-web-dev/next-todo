'use client'
import React from 'react'
import { useAuth } from '@/context/authContext'
import Image from 'next/image'
import { doSignOut } from '@/firebase/auth'

import { redirect } from 'next/navigation'



function Navbar() {

    const {currentUser}=useAuth()
    console.log(currentUser)
    const imageUrl=currentUser?.photoURL


    if(!currentUser){
      redirect('/')
    }

    
  return (
    <div>
      

<nav className="bg-white border-gray-200  text-black">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
  <a href="/" className="flex flex-col items-center space-x-3 rtl:space-x-reverse">
      
      <span className="self-center text-2xl font-semibold whitespace-nowrap ">{currentUser?.displayName}</span>
      <span className="self-center text-sm font-semibold whitespace-nowrap ">{currentUser?.email}</span>
  </a>
  <div className="flex items-center gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex mx-2 text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img width={10} height={10} className="w-8 h-8 rounded-full" src={imageUrl} alt="user photo"/>
      </button>
      <button
          onClick={()=>doSignOut()}
          className="inline-flex mx-2 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-red-400"
        > 
          Signout
        </button>
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
       
        </ul>
      </div>
      
  </div>
 
  </div>
</nav>

    </div>
  )
}

export default Navbar
