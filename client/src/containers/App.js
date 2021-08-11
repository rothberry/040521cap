import { Switch, Route } from "react-router-dom"
import Home from "../components/Home"
import Nav from "../components/Nav"
import PostContainer from "./PostContainer"
import PostForm from "../components/PostForm"
import "./App.css"

const App = () => {
  // ! Front end routes
  //  Nav Bar from react dom
  // home/landing page
  // Posts page
  // Posts show page
  // New post (form)
  // Profile page

  return (
    <div className='App'>
      <Nav />
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
      </Switch>
    </div>
  )
}

export default App
