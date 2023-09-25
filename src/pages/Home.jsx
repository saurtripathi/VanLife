import React from 'react'
import Nav from '../components/Nav'
import useWindowSize from '../Hooks/UseWindowSize'
import { Link } from 'react-router-dom'

export default function Home(rsize) {

    const [width, height] = useWindowSize();
    const newHeight = Number(height) - 80

    return (
        <>
            <div className='home--bg'>
                <h1 className='home--h1'>
                    You got the travel plans, we got the travel vans.
                </h1>
                <p className='home--p1'>
                    Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
                <Link to="/vans" style={{ textDecoration: 'none' }} >
                    <div className='btn-find' typeof='button' >
                        Find your van
                    </div>
                </Link>
            </div>


        </>
    )
}