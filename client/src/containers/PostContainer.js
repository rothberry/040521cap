import { useContext } from "react"
import { Context } from "../contexts/Context"
import Post from "../components/Post"
import ListGroup from "react-bootstrap/ListGroup"

const PostContainer = () => {
  const { posts } = useContext(Context)

  const mappedPosts = () => {
    return posts.map(({ content, id, user: { username } }) => {
      return <Post key={id} content={content} id={id} username={username} />
    })
  }

  return (
    <ListGroup className='posts-container'>
      {mappedPosts()}
    </ListGroup>
  )
}

export default PostContainer
