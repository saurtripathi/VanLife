import { React, useContext } from 'react'
import { Outlet, useOutletContext } from "react-router-dom";
export default function Photos() {

    const {imageUrl} = useOutletContext();
    return (

        <>
            <img src={`${imageUrl}`} className='hostvan--photo' alt='Host van photo' />
        </>
    )
}