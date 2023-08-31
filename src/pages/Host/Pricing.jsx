import { React, useContext } from 'react'
import { Outlet, useOutletContext } from "react-router-dom";

export default function Pricing() {

    const {price} = useOutletContext();

    return (
        <p className='price'>
            <span>${price.toFixed(2)}</span>
            <span>/day</span>
        </p>
    )
}