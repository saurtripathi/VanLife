import React from 'react'
import Nav from '../components/Nav'
import Van from './Van'
import { Link, useSearchParams } from 'react-router-dom'
import '../server'
import { getVans } from '../api'
export default function Vans() {
    const [vanArray, setVanArray] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(false)
    const [errorObject, setErrorObject] = React.useState(null)
    const type = searchParams.get('type')
    console.log(searchParams.toString())

    React.useEffect(() => {

        async function fetchData() {
            setLoading(true)
            try {
                const vans = await getVans()
                setVanArray(vans)
            } catch (err) {
                console.log(err)
                setErrorObject(err)

            } finally {
                setLoading(false)
            }
        }
        fetchData()

    }, [])
    console.log(vanArray)
    console.log(errorObject)
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (errorObject) {
        return <h1>Error...{errorObject.message}</h1>
    }
    const displayedVanArray = type ? vanArray.filter(van => van.type === type.toLowerCase()) : vanArray
    const vanElements = displayedVanArray.map(
        van =>
            <Van van={van} />
    )
    function handleClick(key, value) {
        setSearchParams(
            prevSearchParams => {
                if (value === null) {
                    prevSearchParams.delete(key)
                }
                else {
                    prevSearchParams.set(key, value)
                }
                return prevSearchParams
            }
        )
    }

    return (
        <>
            {/* <div className='container--vans' > */}
            <h1 className='vanlist--heading'>Explore our van options</h1>
            <div className='vanlist--tabs'>
                <button
                    onClick={() => handleClick('type', 'simple')}
                    className={
                        `van--type simple ${type === "simple" ? "selected" : ""}`
                    }
                >
                    Simple
                </button>
                <button
                    onClick={() => handleClick('type', 'luxury')}
                    className={
                        `van--type luxury ${type === "luxury" ? "selected" : ""}`
                    }
                >
                    Luxury
                </button>
                <button
                    onClick={() => handleClick('type', 'rugged')}
                    className={
                        `van--type rugged ${type === "rugged" ? "selected" : ""}`
                    }
                >
                    Rugged
                </button>
                <button className='van--type clear' onClick={() => setSearchParams("")} >Clear filters</button>
            </div>
            <div className='vanlist--vans'>
                {vanElements}
            </div>
            {/* </div> */}
        </>



    )
}