import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import DashBoard from './pages/Host/DashBoard'
import HostVans from './pages/Host/HostVans'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVanDetail from './pages/Host/HostVanDetail'
import Nav from './components/Nav'
import Vans from './pages/Vans'
import VanClicked from './pages/VanClicked'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import HostVanClicked from './pages/Host/HostVanClicked'
import Pricing from './pages/Host/Pricing'
import Photos from './pages/Host/Photos'
import HostVanInfo from './pages/Host/HostVanInfo'
import DefPage from './pages/DefPage'
import Login from './pages/Login'
import AuthProtected from './pages/AuthProtected'

function App() {

  function rsize() {
    console.log(window.innerHeight, window.innerWidth)
  }


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanClicked />} />
            <Route path='login' element={<Login />} />
            <Route element={<AuthProtected />} >
              <Route path='host' element={<HostLayout />} >
                <Route index element={<DashBoard />} />
                <Route path='income' element={<Income />} />
                <Route path='reviews' element={<Reviews />} />
                <Route path='vans' element={<HostVans />} />
                <Route path='vans/:id' element={<HostVanClicked />} >
                  <Route index element={<HostVanInfo />} />
                  <Route path='pricing' element={<Pricing />} />
                  <Route path='photos' element={<Photos />} />
                </Route>
              </Route>
            </Route>
            <Route path='*' element={<DefPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
