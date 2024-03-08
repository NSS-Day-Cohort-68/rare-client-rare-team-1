import React from "react"
import { useNavigate } from "react-router-dom"

export const Categories = () => {
  const navigate = useNavigate()

  const handleCreateCategory = () => {
    navigate("/create-category")
  }

  return (
    <div>
      {/* Category listing logic will go here when we get to that ticket */}
      
      <button onClick={handleCreateCategory}>Create Category</button>
    </div>
  )
}