import React from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

    const { logout } = useAuth0();

    return (
        <nav className="back-layout w-auto mb-4">
            <ul className="flex w-full items-start justify-between">
                <li className="px-3">
                <Link to="/escritorio">
                    <button className="w-28">
                    <img className="" src={logo} alt="" />
                    </button>
                </Link>
                </li>
                <li className=" flex item-center justify-center w-28 h-full">
                    <Link to="/">
                        <i className="fas fa-sign-out-alt fa-3x" onClick={() => logout({ returnTo: window.location.origin })}></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
