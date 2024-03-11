import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addTag } from "../../managers/tagManager"

export const NewTagForm = () => {
  const [tagLabel, setTagLabel] = useState([])

  const navigate = useNavigate()

  const handleFormChange = (event) => {
    setTagLabel(event.target.value)
  }

  const handleAddTag = async () => {
    if (tagLabel) {
      const newTag = {
        label: tagLabel,
      }
      try {
        addTag(newTag)
        navigate("/tags")
      } catch (error) {
        console.error("Error:", error)
      }
    } else {
      alert("Please fill in all fields before adding a tag.")
    }
  }

  return (
    <div className="tag-form container">
      <h2>New Tag</h2>
      <form>
        <label>Tag Label: </label>
        <input
          type="text"
          placeholder="ex: JavaScript"
          value={tagLabel}
          onChange={handleFormChange}
        />
        <button onClick={handleAddTag}>Add Tag</button>
      </form>
    </div>
  )
}
