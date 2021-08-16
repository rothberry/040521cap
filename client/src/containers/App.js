import { useEffect, useContext } from "react"
import { Context } from "../contexts/Context"
import { Switch, Route } from "react-router-dom"
import Home from "../components/Home"
import Nav from "../components/Nav"
import PostContainer from "./PostContainer"
import PostForm from "../components/PostForm"
import Login from "../components/Login"
import Profile from "../components/Profile"
import PostShow from "../components/PostShow"
import Signup from "../components/Signup"
import "./App.css"

const App = () => {

  const { user, loggedIn, posts, setLoggedIn, setUser, setPosts } =
    useContext(Context)

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

  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/feed' component={PostContainer} />
        <Route exact path='/new-post' component={PostForm} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/profile' component={Profile} />
        <Route path='/posts/:id' component={PostShow} />
      </Switch>
    </div>
  )

  // ? WITHOUT CONTEXT
  // return (
  //   <div className='App'>
  //     <Nav setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
  //     <Switch>
  //       <Route exact path='/' component={Home}>
  //         <Home />
  //       </Route>

  //       <Route exact path='/feed'>
  //         <PostContainer posts={posts} setPosts={setPosts} />
  //       </Route>

  //       <Route exact path='/new-post'>
  //         <PostForm addPost={addPost} />
  //       </Route>

  //       <Route exact path='/login'>
  //         <Login setUser={setUser} setLoggedIn={setLoggedIn} />
  //       </Route>

  //       <Route exact path='/signup'>
  //         <Signup setUser={setUser} setLoggedIn={setLoggedIn} />
  //       </Route>

  //       <Route exact path='/profile'>
  //         <Profile user={user} />
  //       </Route>

  //       <Route path='/posts/:id'>
  //         <PostShow />
  //       </Route>

  //     </Switch>
  //   </div>
  // )
}

export default App
