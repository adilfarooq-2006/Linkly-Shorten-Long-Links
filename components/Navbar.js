import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='text-white flex justify-between items-center px-8 p-5 ' >
        <div className="logo font-bold text-4xl bg-gradient-to-r from-[#EB568E] to-[#144EE3] bg-clip-text text-transparent">
            Linkly
        </div>
        <ul className='flex space-x-4'>
            <Link href="/"><li className='hover:underline transition-all font-medium hover:text-blue-300 hover:underline-offset-2 hover:cursor-pointer'>Home</li></Link>
            <Link href="/about"><li className='hover:underline transition-all font-medium hover:text-blue-300 hover:underline-offset-2 hover:cursor-pointer'>About Us</li></Link>
            <Link href="/contact"><li className='hover:underline transition-all font-medium hover:text-blue-300 hover:underline-offset-2 hover:cursor-pointer'>Contact Us</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar