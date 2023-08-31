import { React, useContext, createContext, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import VanClicked from './VanClicked'


export default function Van({ van }) {

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get('type'))
    const typefilter = searchParams.get('type')
    const typeVanStyle = {
        backgroundColor: van.type === 'rugged' ?
            '#115E59' : van.type === 'simple' ?
                '#E17654' : van.type === 'luxury' ?
                    '#161616' : null,
        color: '#FFEAD0',
    }
    return (
        <>

            <div className='van--card'  >
                {/* <Link to={`/vans/${van.id}`} van={van}   > */}
                {/* converted to relative path */}
                {/* we can get rid of template string as id is string in server.js file */}
                <Link to={van.id} van={van}
                    state={{
                        search: `?${searchParams.toString()}`,
                        type: typefilter
                    }}
                >
                    <img src={van.imageUrl} className='van--image' />
                </Link>
                <div>
                    <h5>{van.name}</h5>
                    {/* <div> */}
                    <p><span>${van.price}</span>
                        <span>/day</span></p>
                    {/* </div> */}
                </div>
                <span style={typeVanStyle}>{van.type}</span>
            </div>

        </>
    )
}
