import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ style, children }) {
    console.log(children)
    return (
        <>
            <nav style={style}>
                {children}
            </nav>
        </>
    )
}