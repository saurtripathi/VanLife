import { React, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Link, useParams, useLocation } from 'react-router-dom'
import '../server'
import { getVans } from '../api'
// Importing getVan from api.js defined for firebase
import { getVan } from '../api'
export default function VanClicked() {

    const location = useLocation()
    console.log(location)
    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    console.log(type)
    console.log((search.substring(1).split('='))[1])
    const { id } = useParams()
    console.log(id)
    const [van, setVan] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchVanDetail() {
            setLoading(true)
            try {
                //To get single van info from firebase
                const vans = await getVan(id)
                //To get single van info from miraje
                // const vans = await getVans(id)
                setVan(vans)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }

        }
        fetchVanDetail()
    }


        , [id])

    console.log(van.type)

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }
    return (
        <>
            <div className='container--van--clicked'>
                <Link
                    // to=".." 
                    //  added search parameter to location so that we can navigate back to history
                    to={`..${search}`}
                    relative='path'
                >
                    <h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                            <path d="M13.0223 6.28131C13.4036 6.28131 13.7128 5.97217 13.7128 5.59082C13.7128 5.20947 13.4036 4.90033 13.0223 4.90033V6.28131ZM0.574363 5.10257C0.304709 5.37222 0.304709 5.80942 0.574363 6.07907L4.96862 10.4733C5.23828 10.743 5.67547 10.743 5.94513 10.4733C6.21478 10.2037 6.21478 9.76648 5.94513 9.49683L2.03912 5.59082L5.94513 1.68481C6.21478 1.41516 6.21478 0.977962 5.94513 0.708308C5.67547 0.438654 5.23828 0.438654 4.96862 0.708308L0.574363 5.10257ZM13.0223 4.90033L1.06261 4.90033V6.28131L13.0223 6.28131V4.90033Z" fill="#858585" />
                        </svg>
                        Back to {type} vans
                    </h5>

                </Link>
                <div >
                    <img
                        src={`${van.imageUrl}`}
                        className="VanClicked--img"
                    />
                </div>


                <div className='VanClicked--type'>
                    <span className={`van--type ${van.type} selected`}>
                        {van.type}
                    </span>
                </div>
                <h3 className='VanClicked--name'>
                    {van.name}
                </h3>
                <p >
                    <span className='VanClicked--price'>
                        ${van.price}
                    </span>
                    <span>
                        /day
                    </span>
                </p>
                <p className='VanClicked--description'>
                    {van.description}
                </p>
                <Link to="/login" style={{ textDecoration: 'none' }}><div className='VanClicked--btn-rent' style={{ marginBottom: '1rem' }}>
                    Rent this van
                </div></Link>
            </div>
        </>



    )
}