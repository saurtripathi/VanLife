import { React, useEffect, useState, createContext } from 'react'
import Nav from '../../components/Nav'
import { NavLink, Link, useParams, Outlet } from 'react-router-dom'
import '../../server'
import HostVanSnap from './HostVanSnap'
// import { getHostVans } from '../../api'
import { getVan } from '../../api'
// importing getHostVan from api.js defined for firestore





export default function HostVanClicked() {


    const { id } = useParams()
    console.log(id)
    const [van, setVan] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchVanDetail() {
            setLoading(true)
            try {
                // const vanArr = await getHostVans(id)
                // const [van] = vanArr
                // console.log(van)
                // setVan(van)
            // calling getVan defined for firestore
                const data = await getVan(id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchVanDetail()
    }
        , [id])

    console.log(van[0])
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }
    return (

        <div>

            <h5><svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                <path d="M13.0223 6.28131C13.4036 6.28131 13.7128 5.97217 13.7128 5.59082C13.7128 5.20947 13.4036 4.90033 13.0223 4.90033V6.28131ZM0.574363 5.10257C0.304709 5.37222 0.304709 5.80942 0.574363 6.07907L4.96862 10.4733C5.23828 10.743 5.67547 10.743 5.94513 10.4733C6.21478 10.2037 6.21478 9.76648 5.94513 9.49683L2.03912 5.59082L5.94513 1.68481C6.21478 1.41516 6.21478 0.977962 5.94513 0.708308C5.67547 0.438654 5.23828 0.438654 4.96862 0.708308L0.574363 5.10257ZM13.0223 4.90033L1.06261 4.90033V6.28131L13.0223 6.28131V4.90033Z" fill="#858585" />
            </svg>

                <Link
                    to=".."
                    relative='path'
                >Back to all vans</Link></h5>


            <div className='hostvan--detail--container'>
                <div className='hostvan--img--container'>
                    <img className='hostvan--img' src={`${van.imageUrl}`} />
                    <div className='hostvan--sub--detail'>
                        <p className={`van--type ${van.type} selected`} >{van.type}</p>
                        <p>{van.name}</p>
                        <div>
                            <span>${van.price}</span>
                            <span>/day</span>
                        </div>

                    </div>
                </div>

                <Nav style={{ backgroundColor: '#FFF', height: '60px', marginTop: '1rem' }} >

                    <NavLink

                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}

                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}

                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to='photos'
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>

                </Nav>
                <Outlet context={van} />
            </div>
        </div>
        // </VanContext.Provider>
    )
}
// export { VanContext }