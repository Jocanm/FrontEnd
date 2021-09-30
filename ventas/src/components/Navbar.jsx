import React from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-blu-innova w-auto mb-4">
            <ul className="flex w-full items-start justify-between">
                <li className="px-3">
                <Link to="/">
                    <button className="w-28">
                    <img className="" src={logo} alt="" />
                    </button>
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
