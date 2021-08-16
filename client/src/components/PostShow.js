/* eslint-disable */
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { Chat } from "react-bootstrap-icons"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button"

const PostShow = () => {
  const [showPost, setShowPost] = useState({})
  const [showForm, setForm] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    fetch(`/posts/${id}`)
      .then((res) => res.json())
      .then((p) => {
        setShowPost(p)
      })
      .catch((err) => console.log({ err }))
  }, [])

  const mappedComments = () => {
    if (!!showPost.comments) {
      return showPost.comments.map((com) => {
        return <li key={com.id}>{com.content}</li>
      })
    }
  }

  const toggleForm = () => {
    setForm(!showForm)
  }

  return (
    <div className={`post-show-${id}`}>
      <h1>{showPost.content}</h1>
      <Button onClick={toggleForm} size='sm' variant='light'>
        <Chat />
      </Button>
      {showForm ? (
        <Form.Group fluid='true'>
          <Form.Control as='textarea' placeholder='Write your comment here' />
        </Form.Group>
      ) : null}
      {mappedComments()}
    </div>
  )
}

export default PostShow
