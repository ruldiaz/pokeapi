import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex bg-green-800 bg-opacity-30 p-2 m-2 rounded fixed top-0 left-0 w-full z-50'>
      <a href="/">Home</a>
      <div className='flex flex-1'></div>
      <a className='mr-2' href="/pokemon">Pokemon List</a>
      <a className='mr-2' href="/contact">Contact</a>
    </nav>
  )
}
