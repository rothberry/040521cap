import React from "react"
import { NavLink } from "react-router-dom"
import NavBar from "react-bootstrap/Navbar"

const Nav = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  }

  return (
    <>
      <NavBar bg='dark'>
        <h1 style={{ color: "white" }}>Sozials</h1>
        <NavLink to='/' activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to='/feed' activeStyle={activeStyle}>
          Posts
        </NavLink>
        <NavLink to='/new-post' activeStyle={activeStyle}>
          New Post
        </NavLink>
      </NavBar>
    </>
  )
}

export default Nav
