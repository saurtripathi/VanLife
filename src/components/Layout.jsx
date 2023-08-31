import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import imageUrl from "/avatar-icon.png"
export default function Layout() {
    return (
        <>
            <div className='container'>
                <Nav>
                    <Link to="/" className='vanlife'>#VANLIFE</Link>
                    <div>
                        <NavLink to="/host"
                            style={
                                ({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? 'bold' : 400,
                                        textDecoration: isActive ? 'underline' : 'none'
                                    }
                                }
                            }
                        >
                            Host
                        </NavLink>
                        <NavLink to="/about"
                            style={
                                ({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? 'bold' : 400,
                                        textDecoration: isActive ? 'underline' : 'none'
                                    }
                                }
                            }
                        >
                            About
                        </NavLink>
                        <NavLink to='/vans'
                            style={
                                ({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? 'bold' : 400,
                                        textDecoration: isActive ? 'underline' : 'none'
                                    }
                                }
                            }
                        >
                            Vans
                        </NavLink>
                        <NavLink to="login" className="login-link">
                            <img
                                src={imageUrl}
                                className="login-icon"
                            />
                        </NavLink>
                    </div>
                </Nav>
                <Outlet />
                <Footer />
            </div>

        </>

    )
}