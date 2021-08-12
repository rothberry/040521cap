import { useRef } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useHistory } from "react-router-dom"

const Login = ({ setUser, setLoggedIn }) => {
  const emailRef = useRef("")
  const passwordRef = useRef("")
  const history = useHistory()

  const loginHandler = (e) => {
    e.preventDefault()
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)

    const loginObj = {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    }
    fetch("/login", loginObj)
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
    <Form onSubmit={loginHandler}>
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
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default Login
