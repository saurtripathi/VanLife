import { React, useState, useEffect } from 'react'
import Vantile from './Vantile'

import '../../server'
import { getHostVans } from '../../api'
import { useLocation } from 'react-router-dom'

export default function HostVans() {

    const [userVans, setUserVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const location = useLocation()
    console.log(location.pathname)
    

    useEffect(() => {
        async function fetchUserVanData() {
            setLoading(true)
            try {
                const vans = await getHostVans()
                setUserVans(vans)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }

        }
        fetchUserVanData()

    }, [])

    console.log(userVans)

    const vanelements = userVans.map(vanitem => <Vantile vanitem={vanitem} />)
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <>
            <div >
                <div className='dashboard--listedVans'>
                    <p>Your listed vans</p>
                    <span>View all</span>
                </div>
                {vanelements}


            </div>
        </>
    )
}