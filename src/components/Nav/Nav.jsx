import React, { useContext, useState } from 'react'
import "./nav.css"

import { NavLink, Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

import userPlaceholderImage from "../../assets/images/user.png"
import Swal from 'sweetalert2'

const Nav = () => {

    const navigate = useNavigate();

    const { user, userSignOut } = useContext(AuthContext);
    console.log(user)

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Are you sure want to logout?',
            showCancelButton: true,
            confirmButtonText: 'Yes, confirm!',
            cancelButtonText: 'No, cancel!',
            confirmButtonColor: "red"
        })
            .then(result => {
                if (result.isConfirmed) {
                    userSignOut();
                    navigate("/")
                }
            })
    }



    const navLinks = <>
        <li><NavLink className='font-bold text-xl lg:p-0 lg:mr-10' to="/">Home</NavLink></li>
        <li><NavLink className='font-bold text-xl lg:p-0 lg:mr-10' to="/about">About</NavLink></li>
        {/* <li><NavLink className='font-bold text-xl lg:p-0 lg:mr-10' to="/blogs">Dummy</NavLink></li>
        <li><NavLink className='font-bold text-xl lg:p-0 lg:mr-10' to="/blogs">Dummy</NavLink></li> */}
        <li><NavLink className='font-bold text-xl lg:p-0 lg:mr-10' to="/contact">Contact</NavLink></li>
    </>



    return (
        <div className="navbar bg-base-100 mt-8">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="text-xl md:text-4xl font-extrabold">ByteX</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>


            <div className="navbar-end">
                {
                    user && <div className='mr-4'>
                        <img className='w-[40px] mx-auto'
                            src={user?.photoURL || userPlaceholderImage}
                        />
                        <p className='font-bold text-sm'>{user?.displayName || "User"}</p>
                    </div>
                }
                {
                    user ? <button onClick={handleLogout}
                        className="font-bold text-lg bg-red-600 text-white px-7 py-3 rounded-lg cursor-pointer">
                        Logout
                    </button>
                        :
                        <button className="font-bold text-lg bg-blue-600 text-white px-7 py-3 rounded-lg cursor-pointer">
                            <Link to="/login" >Login</Link>
                        </button>
                }
            </div>
        </div>
    )
}

export default Nav