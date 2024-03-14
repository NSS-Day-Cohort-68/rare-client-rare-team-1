import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const NewCommentForm = ({ currentUser, currentPostId }) => {
  const [content, setContent] = useState("")

  const navigate = useNavigate()

  const handleFormChange = (event) => {
    setContent(event.target.value)
  }

  const handleAddComment = async () => {
    if (content) {
      const newComment = {
        post_id: currentPostId,
        author_id: currentUser.token,
        content: content,
      }
      try {
        navigate(`/posts/${currentPostId}`)
      } catch (error) {
        console.error("Error:", error)
      }
    } else {
      alert("Please fill in all fields before adding a tag.")
    }
  }

  return (
    <div className="comment-form container">
      <h2>New Comment</h2>
      <form>
        <label>Tag Label: </label>
        <input
          type="text"
          placeholder="Comment..."
          value={content}
          onChange={handleFormChange}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </form>
    </div>
  )
}
