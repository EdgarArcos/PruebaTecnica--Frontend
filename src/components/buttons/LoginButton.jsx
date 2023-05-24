import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {

    const { loginWithRedirect } = useAuth0()
    return (
        <button className='text-white bg-gradient-to-r mt-3 from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2' onClick={() => loginWithRedirect()}>Login</button>
    )
}
