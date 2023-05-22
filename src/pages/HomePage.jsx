import React from 'react'
import { Link } from "react-router-dom";
export default function HomePage() {

    return (
        <>
            HomePage
            <Link to={"/posts"}>Pagina</Link>
        </>
    )
}
