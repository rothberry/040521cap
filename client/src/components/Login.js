import { useContext, useRef } from "react"
import { Context } from "../context/Context"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Login = () => {
  const emailRef = useRef("")
  const passwordRef = useRef("")
  // const history = useHistory()

  // ? Using state instead of ref for login
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const { loginHandler } = useContext(Context)

  // const handleChange = (e) => {
  //   if (e.target.name === "email") {
  //     setEmail(e.target.value)
  //   } else if (e.target.name === "password") {
  //     setPassword(e.target.value)
  //   }
  // }

  // ! MOVED FROM PROPS TO CONTEXT
  // ?With Refs
  const refLoginHandler = (e) => {
    e.preventDefault()
    loginHandler({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
  }

  // // ?With State
  // const stateLoginHandler = (e) => {
  //   e.preventDefault()
  //   loginHandler(e, { email, password })
  // }

  // const loginHandler = (e) => {
  //   e.preventDefault()
  //   console.log(emailRef.current.value)
  //   console.log(passwordRef.current.value)

  //   const loginObj = {
  //     method: "post",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: emailRef.current.value,
  //       password: passwordRef.current.value,
  //     }),
  //   }
  //   fetch("/login", loginObj)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       if (!data.errors) {
  //         console.log("LOGGED IN")
  //         setUser(data)
  //         setLoggedIn(true)
  //         history.push("/profile")
  //       } else {
  //         console.log("no catch: ", data.errors)
  //       }
  //     })
  //     .catch((err) => console.log("catch: ", err))
  // }

  // <Form onSubmit={(event) => loginHandler(event, emailRef, passwordRef)}>
  return (
    <Form onSubmit={refLoginHandler}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={emailRef}
          // onChange={handleChange}
          name='email'
          type='email'
          placeholder='Enter email'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          // onChange={handleChange}
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
