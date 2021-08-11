import React from "react"
import Form from "react-bootstrap/Form"

const PostForm = () => {
  return (
    <div className='post-form'>
      <Form>
        <Form.Group classname='mb-3'>
          <Form.Label>Create Your Posts</Form.Label>
        </Form.Group>
      </Form>
    </div>
  )
}

export default PostForm
