import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../buttons/LoginButton';
import ProfileButton from '../buttons/ProfileButton';
import { BsSearch } from 'react-icons/bs';
export default function Navbar() {
    const { isAuthenticated } = useAuth0()
    if (isAuthenticated === false) {
        return (
            <>
                <nav className=" dark:bg-gray-700 h-32">
                    <div className=" px-4 py-1">
                        <div className=" flex items-center">
                            <img src="src\assets\gifed-low-resolution-color-logo-removebg-preview.png" alt="Logo" className=' h-32' />
                            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-14 text-2xl">
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Your creations</a>
                                </li>
                                <li>
                                    <BsSearch className=' pl-2 fixed mt-1 ' />
                                    <input className=' pl-8' placeholder='Search...'></input>
                                </li>
                            </ul>
                            <div className='pl-96'>
                                <LoginButton />
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
    return (
        <>
            <nav className="dark:bg-gray-700 h-32">
                <div className=" px-4 py-1">
                    <div className=" flex items-center">
                        <img src="src\assets\gifed-low-resolution-color-logo-removebg-preview.png" alt="Logo" className=' h-32' />
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-14 text-2xl">
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Your creations</a>
                            </li>
                        </ul>
                        <div className='pl-96'>
                            <div className='pl-96'>
                                <ProfileButton />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
