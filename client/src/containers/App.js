import { Switch, Route } from "react-router-dom"
import Home from "../components/Home"
import Nav from "../components/Nav"
import PostContainer from "./PostContainer"
import PostForm from "../components/PostForm"
import Login from "../components/Login"
import Profile from "../components/Profile"
import "./App.css"
import { useContext, useEffect } from "react"
import { Context } from "../context/Context"

const App = () => {
  // ! TO CONTEXT
  // const [user, setUser] = useState({})
  // const [loggedIn, setLoggedIn] = useState(false)

  // const context = useContext(Context)
  const { findMe } = useContext(Context)

  useEffect(() => {
    findMe()
  }, [])

  // ! TO CONTEXT
  // const findMe = () => {
  //   fetch("/me", {
  //     credentials: "same-origin",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!data.error) {
  //         setUser(data)
  //         setLoggedIn(true)
  //       }
  //     })
  //     .catch((err) => console.log({ err }))
  // }

  return (
    <div className='App'>
      {/* <Nav setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> */}
      <Nav />
      <Switch>
        {/* <Route exact path='/' component={Home}>
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

          Route for store,
          Route for favorite places
        </Route> */}

        {/* END GOAL */}

        <Route exact path='/' component={Home} />
        <Route exact path='/feed' component={PostContainer} />
        <Route exact path='/new-post' component={PostForm} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </div>
  )
}

export default App
