import { useNavigate } from "react-router-dom"

export const Tags = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/new-tag")
  }

  return (
    <div className="tag-list">
      Tags
      <button onClick={handleClick}>New Tag</button>
    </div>
  )
}
