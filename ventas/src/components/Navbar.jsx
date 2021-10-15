import React from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

    const { logout, user } = useAuth0();
    
    const handleClose = ()=>{
        logout({ returnTo: window.location.origin })
        localStorage.setItem('token',null)
    }
    
    return (
        <nav className="back-layout w-auto mb-4">
            <ul className="flex w-full items-start justify-between">
                <li className="px-3">
                <Link to="/">
                    <button className="w-28">
                    <img className="" src={logo} alt="logo" />
                    </button>
                </Link>
                </li>
                <li className=" flex w-full h-full items-center justify-end mr-4">
                    <span className="text-center mr-4 font-bold text-xl">{user.name}</span>
                    <Link to="/">
                        <i className="fas fa-sign-out-alt fa-3x" onClick={handleClose}></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
