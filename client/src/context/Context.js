// Goal is to create a context and Context Provider

import { createContext, useState } from "react"
import { useHistory } from "react-router"

export const Context = createContext()

// Now we need to craete the context component
const ContextProvider = (props) => {
  // everything inside here is the same as a normal react comp

  // const [didThisWork, setDidThisWork] = useState("yayayaya")
  // const testFunc = () => {
  //   console.log("fghjk")
  // }
  const history = useHistory()

  // ! PULLING FROM APP
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

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

  // !PULLING FROM NAV
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

  // !PULLING FROM LOGIN

  const loginHandler = (formData) => {
    const loginObj = {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }
    fetch("/login", loginObj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!data.errors) {
          console.log("LOGGED IN")
          setUser(data)
          setLoggedIn(true)
          history.push("/profile")
        } else {
          console.log("no catch: ", data.errors)
        }
      })
      .catch((err) => console.log("catch: ", err))
  }

  // ! PULLING FROM POSTCONTAINER
  const [posts, setPosts] = useState([])

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

  // except, the return/render is Slightly different
  // {user: user}
  const store = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    findMe,
    handleLogout,
    loginHandler,
    posts,
    setPosts,
    fetchPosts,
  }

  // The return remains constant in this format
  return <Context.Provider value={store}>{props.children}</Context.Provider>
}

export default ContextProvider
