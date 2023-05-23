import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../buttons/LoginButton';
import ProfileButton from '../buttons/ProfileButton';
export default function Navbar() {
    const { isAuthenticated } = useAuth0()
    if (isAuthenticated === false) {
        return (
            <>
                <nav className=" dark:bg-gray-700 h-32">
                    <div className=" px-4 py-1">
                        <div className=" flex items-center">
                            <img src="src\assets\Logo\GifEd.png" alt="Logo" className=' h-32' />
                            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-2xl">
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Profile</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Search</a>
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
            <nav className=" dark:bg-gray-700 h-32">
                <div className=" px-4 py-1">
                    <div className=" flex items-center">
                        <img src="src\assets\Logo\GifEd.png" alt="Logo" className=' h-32' />
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-14 text-2xl">
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Search</a>
                            </li>
                        </ul>
                        <div className='pl-96'>
                            <ProfileButton />
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
