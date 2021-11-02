import { Switch, Route } from "react-router-dom"
import Home from "../components/Home"
import Nav from "../components/Nav"
import PostContainer from "./PostContainer"
import PostForm from "../components/PostForm"
import Login from "../components/Login"
import Profile from "../components/Profile"
import PostShow from "../components/PostShow"
import "./App.css"
import { useEffect, useContext } from "react"
import { Context } from "../context/Context"
import Signup from "../components/Signup"

const App = () => {
  // ! Front end routes
  // const [user, setUser] = useState({})
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [posts, setPosts] = useState([])
  const { fetchPosts, findMe } = useContext(Context)

  // Component did mount
  useEffect(() => {
    findMe()
    fetchPosts()
  }, [])

  // ! MOVED TO OUR CONTEXT STORE
  // const findMe = () => {
  // const fetchPosts = () => {
  // const addPost = (p) => {

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
}

export default App
