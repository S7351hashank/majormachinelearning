import Link from 'next/link'
import React from 'react'
import logo from "@/assets/logo_mediguide.png"

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src={logo.src} alt="Your Company" />
                        </div>
                        <div className="flex flex-1 items-center justify-around gap-20  ">
                            <div className="ml-6 mr-10 flex">
                                <div className="flex space-x-4">
                                    <Link href="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Predict</Link>
                                    <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About Us</Link>
                                    <Link href="/contactus" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact Us</Link>
                                    <Link href="/blog" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Blogs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
