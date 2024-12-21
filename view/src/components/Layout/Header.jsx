import React from 'react'
import Navbar from './Navbar'

const Header = ({ onNavbarInputChange}) => {
  return (
    <>
    <h1 style={{ textAlign: "left", marginLeft: "2rem" }}>Adloggs</h1>
    <Navbar/>
    </>
  )
}

export default Header