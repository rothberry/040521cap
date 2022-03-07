import Post from "../components/Post"
import ListGroup from "react-bootstrap/ListGroup"
import { useContext } from "react"
import { Context } from "../context/Context"

const PostContainer = () => {
  // const {posts} = props
  const { posts } = useContext(Context)

  const mappedPosts = () => {
    return posts.map(({ content, id, user: { username } }) => {
      return <Post key={id} content={content} id={id} username={username} />
    })
  }

  return (
    <ListGroup className='posts-container'>
      {/* Mapping function for all the posts */}
      {mappedPosts()}
    </ListGroup>
  )
}

export default PostContainer
