import Post from "../components/Post"
import { useState, useEffect } from "react"

const PostContainer = () => {
  // have state of all the posts

  const [posts, setPosts] = useState([])
  // fetch all the posts from the database

  useEffect(() => {
    fetchPosts()
  }, [])

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

  const mappedPosts = () => {
    return posts.map(({ content, id, user: { username } }) => {
      return <Post key={id} content={content} id={id} username={username} />
    })
  }

  // const mappedPostsVar = posts.map((post) => {
  //   return <Post post={post} />
  // })

  return (
    <div className='posts-container'>
      {/* Mapping function for all the posts */}
      {mappedPosts()}
    </div>
  )
}

export default PostContainer
