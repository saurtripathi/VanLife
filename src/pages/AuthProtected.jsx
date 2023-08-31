import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthProtected() {

    const auth = localStorage.getItem('loggedIn')
    const location = useLocation()
    console.log(location.pathname)
    console.log(auth)
    if (!auth) {
        return <Navigate
            to='/login'
            state={{
                message: 'You must login first!',
                pathname: `${location.pathname}`
            }}
            replace
        />
    }
    return <Outlet />



}   