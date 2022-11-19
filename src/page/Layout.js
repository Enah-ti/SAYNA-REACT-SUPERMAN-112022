import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

function Layout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout