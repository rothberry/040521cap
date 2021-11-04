// GOal => create our "store" of global state
import { createContext, useState } from "react"

export const Context = createContext()

// create provider

const ContextProvider = (props) => {
  // going to wrap around our entire App
  // similar to the BrowserRouter

  // ?MOVED FROM APP.js
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [posts, setPosts] = useState([])
  const [showPost, setShowPost] = useState({})

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

  const fetchPost = (id) => {
    fetch(`/posts/${id}`)
      .then((res) => res.json())
      .then((p) => {
        setShowPost(p)
      })
      .catch((err) => console.log({ err }))
  }
  // the value prop inside the provider is where we pass down our global state
  const store = {
    user: user,
    loggedIn,
    posts,
    setUser,
    setLoggedIn,
    setPosts,
    fetchPosts,
    findMe,
    addPost,
    fetchPost,
    showPost,
  }

  return <Context.Provider value={store}>{props.children}</Context.Provider>
}

export default ContextProvider
