import { useContext } from "react"
import { Context } from "../contexts/Context"
import Image from "react-bootstrap/Image"

const Profile = () => {
  const {
    user: { username, bio, profile_picture },
  } = useContext(Context)

  const imgStyle = {
    width: "20%",
  }

  return (
    <>
      <h1>{username}</h1>
      <p>{bio}</p>
      <Image src={profile_picture} fluid style={imgStyle} />
    </>
  )
}

export default Profile
