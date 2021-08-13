import { useParams } from "react-router"
import { useState, useEffect } from "react"

const PostShow = ({ posts }) => {
  const [showPost, setShowPost] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getPost()
  }, [posts])

  const getPost = () => {
    const post = posts.find((p) => p.id == id)
    if (post) {
      setShowPost(post)
    }
  }

  const mappedComments = () => {
    if (!!showPost.comments) {
      return showPost.comments.map((com) => {
        return <li>{com.content}</li>
      })
    }
  }
  return (
    <div className={`post-show-${id}`}>
      <h1>{showPost.content}</h1>
      {mappedComments()}
    </div>
  )
}

export default PostShow
