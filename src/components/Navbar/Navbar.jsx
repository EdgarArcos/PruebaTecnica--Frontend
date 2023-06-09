import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../buttons/LoginButton';
import ProfileButton from '../buttons/ProfileButton';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const { isAuthenticated } = useAuth0()
    return <>
        <nav className="dark:bg-gray-800 h-32">
            <div className="pl-20 py-1">
                <div className=" flex items-center">
                    <img src="src\assets\gifed-low-resolution-color-logo-removebg-preview.png" alt="Logo" className=' h-32' />
                    {
                        isAuthenticated ?
                            <div>
                                <div className='mr-32 ml-4'>
                                    <ProfileButton />
                                </div>
                            </div> :
                            <div>
                                <div className='mr-32 ml-4 '>
                                    <LoginButton />
                                </div>
                            </div>
                    }
                    <div>
                        <ul className="flex flex-row space-x-10 text-2xl">
                            <li>
                                <Link to={"/"} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xl px-3 py-2.5 text-center mb-2" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to={"/YourCreations"} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xl px-3 py-2.5 text-center mb-2">Creations</Link>
                            </li>
                            <li>
                                <Link to={"/Search"} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xl px-3 py-2.5 text-center mb-2">Search</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
}
