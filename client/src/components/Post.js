// import { useEffect } from "react"

const Post = ({ content, id, username }) => {
  return (
    <div className={`post-${id}`}>
      <p>
        {username}: {content}
      </p>
    </div>
  )
}

export default Post
