import { useRef, useState } from "react"
import { useHistory } from "react-router"
import Button from "react-bootstrap/esm/Button"
import Form from "react-bootstrap/Form"

const PostForm = ({ user }) => {
  const textRef = useRef()
  const history = useHistory()
  // const [text, setText] = useState("")

  const addPost = (e) => {
    e.preventDefault()
    console.log(textRef.current.value)
    // console.log(text)
    const postObj = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        // content: text,
        content: textRef.current.value,
        user_id: user.id,
      }),
    }
    fetch("/posts", postObj)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          history.push("/feed")
        }
      })
      .catch((err) => console.log(err))
  }

  // const handleInput = (e) => {
  //   setText(e.target.value)
  // }

  return (
    <div className='post-form'>
      <Form onSubmit={addPost}>
        <Form.Group className='mb-3'>
          <Form.Label>Create Your Posts</Form.Label>
          {/* <Form.Control
            type='text'
            onChange={handleInput}
            placeholder="What's on your mind"
          /> */}
          <Form.Control
            type='text'
            ref={textRef}
            placeholder="What's on your mind"
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Create Post
        </Button>
      </Form>
    </div>
  )
}

export default PostForm
