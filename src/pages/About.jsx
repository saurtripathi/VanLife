import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import Vans from './Vans'
export default function About() {


    return (
        <>
            <div>
                <section className='mlr'>
                    <img src='/About_Image.png' alt="About page image" />
                </section>
                <section>
                    <h1 className='about--heading'>
                        Don’t squeeze in a sedan when you could relax in a van.
                    </h1>
                    <p className='about--description'>
                        Our mission is to enliven your road trip with the perfect travel
                        van rental. Our vans are recertified before each trip to ensure
                        your travel plans can go off without a hitch.
                        <br />(Hitch costs extra 😉)

                        <br />Our team is full of vanlife enthusiasts who know firsthand the
                        magic of touring the world on 4 wheels.
                    </p>
                </section>
                <section>
                    <div>
                        <p className='about--destination'>
                            Your destination is waiting.
                            Your van is ready.
                        </p>
                        <Link to={"/Vans"} className='explore_vans' style={{ textDecoration: 'none' }}>
                            Explore our vans
                        </Link>
                    </div>
                </section>
            </div>

        </>
    )
}