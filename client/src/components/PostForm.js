import { useRef } from "react"
import { useHistory } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const PostForm = () => {
  const postContent = useRef("")
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const postPostObj = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ content: postContent.current.value }),
    }
    fetch("/posts", postPostObj)
      .then((res) => res.json())
      .then((data) => {
        // add to list of all the posts
        // and/or redirect to the list of all the posts
        history.push("/feed")
        // history.push(`/posts/${data.id}`)
      })
  }
  
  return (
    <div className='post-form'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Create Your Posts</Form.Label>
          <Form.Control
            placeholder="What's on your mind?"
            as='textarea'
            ref={postContent}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default PostForm
