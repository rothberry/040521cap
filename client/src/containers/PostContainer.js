import Post from "../components/Post"
import ListGroup from "react-bootstrap/ListGroup"

const PostContainer = ({ posts, setPosts }) => {
  // ! MOVED UP TO APP FOR QUICKER RENDER TIMES
  // const [posts, setPosts] = useState([])
  // fetch all the posts from the database

  // useEffect(() => {
  //   if (posts.length < 1) {
  //     fetchPosts()
  //   }
  // }, [])

  // const fetchPosts = () => {
  //   fetch("/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       if (!data.errors) {
  //         setPosts(data)
  //       } else {
  //         console.log("Errors: ", data.errors)
  //       }
  //     })
  //     .catch((err) => console.log({ err }))
  // }

  const mappedPosts = () => {
    return posts.map(({ content, id, user: { username } }) => {
      return <Post key={id} content={content} id={id} username={username} />
    })
  }

  // const mappedPostsVar = posts.map((post) => {
  //   return <Post post={post} />
  // })

  return (
    <ListGroup className='posts-container'>
      {/* Mapping function for all the posts */}
      {mappedPosts()}
    </ListGroup>
  )
}

export default PostContainer
