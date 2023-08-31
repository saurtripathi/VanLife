import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from '../api'

export default function Login() {
 
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const loc = useLocation()
    const [error, setError] = useState(null)
    const [status,setStatus] = useState('idle')
    const navigate = useNavigate()
    console.log(loc)
    const pathname = loc.state?.pathname
    console.log(pathname)
    function handleSubmit(e) {

        e.preventDefault()
        // console.log(loginFormData)
        setStatus("submitting")
        loginUser(loginFormData).then(data => {
            navigate(`${pathname}`, { replace: true })
            localStorage.setItem('loggedIn', true)
            setError(null)
        }).catch(err => {
            setError(err)
            console.log(err)
        }).finally(() => {
            setStatus('idle')
        })
    }
    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }



    return (
        <div className="login-container">
            <h3 className="login--first">{loc.state?.message || ""}</h3>
            <h1>Sign in to your account</h1>
            <h3 className="login--first">{error?.message}</h3>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button id="login" >Sign in</button>

            </form>
            <p><span>Don’t have an account?</span><span> Create one now</span> </p>
            <button onClick={() => localStorage.removeItem('loggedIn')}>x</button>
        </div>
    )

}