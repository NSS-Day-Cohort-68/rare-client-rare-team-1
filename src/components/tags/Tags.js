import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getSortedTags } from "../../managers/tagManager"
import "./Tags.css"

export const Tags = () => {
  const navigate = useNavigate()

  const [tags, setTags] = useState([])
  const [updatedTags, setUpdatedTags] = useState([])

  const handleClick = () => {
    navigate("/new-tag")
  }

  useEffect(() => {
    getSortedTags().then((res) => setTags(res))
  }, [])

  useEffect(() => {
    getSortedTags().then((res) => setUpdatedTags(res))
  }, [tags])

  return (
    <div className="tags-global-container">
      <div className="tag-list-container">
        <h2>Tags</h2>
        <ul className="tag-list">
          {updatedTags.map((t) => (
            <div key={`tag-${t.id}`} className="tag-item">
              <li className="tag-label">{t.label}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="tag-form-container">
        <h2>Create a New Tag</h2>
        <button onClick={handleClick}>New Tag</button>
      </div>
    </div>
  )
}
