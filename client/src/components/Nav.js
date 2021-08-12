import { NavLink, useHistory } from "react-router-dom"
import NavBar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/esm/Button"

const Nav = ({ setUser, loggedIn, setLoggedIn }) => {
  const history = useHistory()

  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  }

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((data) => {
      console.log("logged out")
      setUser({})
      setLoggedIn(false)
      history.push("/")
    })
  }

  if (loggedIn) {
    return (
      <>
        <NavBar bg='dark'>
          <NavLink to='/' activeStyle={activeStyle}>
            <h1 style={{ color: "white" }}>Sozials</h1>
          </NavLink>
          <NavLink to='/feed' activeStyle={activeStyle}>
            Posts
          </NavLink>
          <NavLink to='/new-post' activeStyle={activeStyle}>
            New Post
          </NavLink>
          <NavLink to='/profile' activeStyle={activeStyle}>
            Profile
          </NavLink>
          <NavBar.Brand style={activeStyle} onClick={handleLogout}>
            <Button>Logout</Button>
          </NavBar.Brand>
        </NavBar>
      </>
    )
  } else {
    return (
      <>
        <NavBar bg='light'>
          <NavLink to='/' activeStyle={activeStyle}>
            <h1 style={{ color: "black" }}>Sozials</h1>
          </NavLink>
          <NavLink to='/login' activeStyle={activeStyle}>
            Login
          </NavLink>
        </NavBar>
      </>
    )
  }
}

export default Nav
