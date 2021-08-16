import { Switch, Route } from "react-router-dom"
import Home from "../components/Home"
import Nav from "../components/Nav"
import PostContainer from "./PostContainer"
import PostForm from "../components/PostForm"
import Login from "../components/Login"
import Profile from "../components/Profile"
import PostShow from "../components/PostShow"
import "./App.css"
import { useState, useEffect } from "react"
import Signup from "../components/Signup"

const App = () => {
  // ! Front end routes
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    findMe()
    fetchPosts()
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

  const fetchPosts = () => {
    fetch("/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!data.errors) {
          setPosts(data)
        } else {
          console.log("Errors: ", data.errors)
        }
      })
      .catch((err) => console.log({ err }))
  }

  const addPost = (p) => {
    setPosts([...posts, p])
  }

  return (
    <div className='App'>
      <Nav setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route exact path='/' component={Home}>
          <Home />
        </Route>

        <Route exact path='/feed'>
          <PostContainer posts={posts} setPosts={setPosts} />
        </Route>

        <Route exact path='/new-post'>
          <PostForm addPost={addPost} />
        </Route>

        <Route exact path='/login'>
          <Login setUser={setUser} setLoggedIn={setLoggedIn} />
        </Route>

        <Route exact path='/signup'>
          <Signup setUser={setUser} setLoggedIn={setLoggedIn} />
        </Route>

        <Route exact path='/profile'>
          <Profile user={user} />
        </Route>

        <Route path='/posts/:id'>
          <PostShow />
        </Route>

        {/* <Route path='*'>
          <Redirect to='/' />
        </Route> */}
      </Switch>
    </div>
  )
}

export default App
