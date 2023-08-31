import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Nav from './Nav'
export default function HostLayout() {

    const activelink = {
        textDecoration: 'underline',
        fontWeight: 900
    }

    return (
        <>

            <div className='container container--modified'>
                <Nav>

                    <NavLink
                        end
                        // to=".."
                        // relative='path'
                        to='.'
                        style={
                            ({ isActive }) => {
                                return {
                                    fontWeight: isActive ? 'bold' : 400,
                                    textDecoration: isActive ? 'underline' : 'none'
                                }
                            }
                        }

                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="income"
                        style={
                            ({ isActive }) => {
                                return {
                                    fontWeight: isActive ? 'bold' : '400',
                                    textDecoration: isActive ? 'underline' : 'none'
                                    // color: isActive ? 'red' : 'blue'
                                }
                            }
                        }
                    >
                        Income
                    </NavLink>
                    <NavLink
                        to='vans'
                        style={
                            ({ isActive }) => {
                                return {
                                    fontWeight: isActive ? 'bold' : '400',
                                    textDecoration: isActive ? 'underline' : 'none'
                                    // color: isActive ? 'red' : 'blue'
                                }
                            }
                        }
                    >
                        Vans
                    </NavLink>
                    <NavLink
                        to='reviews'
                        style={
                            ({ isActive }) => {
                                return {
                                    fontWeight: isActive ? 'bold' : '400',
                                    textDecoration: isActive ? 'underline' : 'none'
                                    // color: isActive ? 'red' : 'blue'
                                }
                            }
                        }
                    >
                        Reviews
                    </NavLink>

                </Nav>
                <Outlet />
            </div>
        </>

    )
}