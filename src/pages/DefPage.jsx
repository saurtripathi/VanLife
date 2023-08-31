import React from 'react'
import { Link } from 'react-router-dom'

export default function DefPage() {

    return (
        <div className='container' >
            <div className='defpage--container'>
                <h1>Sorry, the page you were looking for was not found.</h1>
                <Link to="/"><div>Return to home</div></Link>
            </div>
        </div>

    )
}