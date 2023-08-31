import React from "react";
import { Link, NavLink } from 'react-router-dom'
export default function Vantile({ vanitem }) {
    console.log(vanitem)
    return (
        <>
            <div className='dashboard--van-tile'>
                <div>
                    {/* <NavLink key={vanitem.id} to={`/host/vans/${vanitem.id}`} > */}
                    {/* converting to relative path */}
                    {/* we can get rid of template string as id is string in server.js file */}
                    <NavLink 
                        key={vanitem.id} 
                        to={`/host/vans/${vanitem.id}`} 
                        
                        >
                        {/* <NavLink key={vanitem.id} to={vanitem.id} > */}
                        <img
                            className='dashboard--van-tile-img'
                            src={`${vanitem.imageUrl}`}
                        />
                    </NavLink>
                    <div>
                        <p>{vanitem.name}</p>
                        <p>${vanitem.price}/day</p>
                    </div>
                </div>
                <span>Edit</span>
            </div>
        </>
    )
}