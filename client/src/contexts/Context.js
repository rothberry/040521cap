import { createContext, useState } from "react"

// const initialState = {
//   testing: true
// }

export const Context = createContext()

const ContextProvider = (props) => {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [posts, setPosts] = useState([])

  const addPost = (p) => {
    setPosts([...posts, p])
  }

  return (
    <Context.Provider
      value={{ user, loggedIn, posts, setUser, setLoggedIn, setPosts, addPost }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
