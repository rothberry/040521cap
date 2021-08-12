import { Switch, Route, Redirect } from "react-router-dom"
import Home from "../components/Home"
import Nav from "../components/Nav"
import PostContainer from "./PostContainer"
import PostForm from "../components/PostForm"
import Login from "../components/Login"
import Profile from "../components/Profile"
import "./App.css"
import { useState, useEffect } from "react"

const App = () => {
  // ! Front end routes
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    findMe()
  }, [])

  const findMe = () => {
    fetch("/me", {
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setUser(data)
          setLoggedIn(true)
        }
      })
      .catch((err) => console.log({ err }))
  }

  return (
    <div className='App'>
      <Nav setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route exact path='/' component={Home}>
          <Home />
        </Route>

        <Route exact path='/feed'>
          <PostContainer />
        </Route>

        <Route exact path='/new-post'>
          <PostForm />
        </Route>

        <Route exact path='/login'>
          <Login setUser={setUser} setLoggedIn={setLoggedIn} />
        </Route>

        <Route exact path='/profile'>
          <Profile user={user} />
        </Route>

        {/* <Route path='*'>
          <Redirect to='/' />
        </Route> */}
      </Switch>
    </div>
  )
}

export default App
