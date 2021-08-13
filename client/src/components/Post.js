// import { useEffect } from "react"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import { useHistory } from "react-router"

const Post = ({ content, id, username }) => {
  const history = useHistory()

  const linkToPostShow = (e) => {
    history.push(`/posts/${id}`)
  }

  return (
    <ListGroupItem className={`post-${id}`} action onClick={linkToPostShow}>
      {username}: {content}
    </ListGroupItem>
  )
}

export default Post
