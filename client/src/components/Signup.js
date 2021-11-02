import { useContext, useRef } from "react"
import { useHistory } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Context } from "../context/Context"

const Signup = () => {
  const emailRef = useRef("")
  const passwordRef = useRef("")
  const usernameRef = useRef("")
  const bioRef = useRef("")
  const picRef = useRef("")

  const { setUser, setLoggedIn } = useContext(Context)
  const history = useHistory()

  const signupHandler = (e) => {
    e.preventDefault()

    const signupObj = {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    }
    fetch("/signup", signupObj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!data.errors) {
          console.log("LOGGED IN")
          setUser(data)
          setLoggedIn(true)
          history.push("/profile")
        } else {
          console.log("no catch: ", data.errors)
        }
      })
      .catch((err) => console.log("catch: ", err))
  }

  return (
    <Form onSubmit={signupHandler}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={emailRef}
          name='email'
          type='email'
          placeholder='Enter email'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={passwordRef}
          name='password'
          type='password'
          placeholder='Password'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicBio'>
        <Form.Label>Bio</Form.Label>
        <Form.Control ref={bioRef} name='bio' as='textarea' placeholder='Bio' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicUsername'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          ref={usernameRef}
          name='username'
          type='text'
          placeholder='Username'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formFile'>
        <Form.Label>Choose Picture</Form.Label>
        <Form.Control type='file' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default Signup
