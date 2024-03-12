import { useEffect, useState } from "react"
import { getSortedTags } from "../../managers/tagManager"
import { NewTagForm } from "./TagForm"
import "./Tags.css"

export const Tags = () => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    getSortedTags().then((res) => setTags(res))
  }, [])

  return (
    <div className="tags-global-container">
      <div className="tag-list-container">
        <h2>Tags</h2>
        <ul className="tag-list">
          {tags.map((t) => (
            <div key={`tag-${t.id}`} className="tag-item">
              <li className="tag-label">{t.label}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="tag-form-container">
        <NewTagForm />
      </div>
    </div>
  )
}
