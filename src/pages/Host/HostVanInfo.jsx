import { React, useContext } from 'react'
import { Outlet, useOutletContext } from "react-router-dom";

export default function HostVanInfo() {

    const {name,type,description} = useOutletContext()

    return (

        <div className='hostvaninfo'>
            <p>
                <span>Name:</span>
                <span>{name}</span>
            </p>
            <p>
                <span>Category:</span>
                <span>{type}</span>
            </p>
            <p>
                <p style={{ display: "inline" }}>Description:</p>
                <p style={{ display: "inline" }}>{description}</p>
            </p>
            <p >
                <span>Visibility:</span>
                <span>Public</span></p>
        </div>
    )
}