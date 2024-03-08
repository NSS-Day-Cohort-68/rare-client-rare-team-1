import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateCategory = () => {
  const [categoryLabel, setCategoryLabel] = useState("")
  const navigate = useNavigate()

  const handleSave = async (e) => {
    e.preventDefault()

    const categoryData = { label: categoryLabel }

    try {
      const response = await fetch('http://localhost:8000/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
      });

      if (response.ok) {
        navigate("/categories");
      } else {
        console.error('Error creating category');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <form onSubmit={handleSave}>
      <label htmlFor="categoryLabel">Category:</label>
      <input
        type="text"
        id="categoryLabel"
        value={categoryLabel}
        onChange={(e) => setCategoryLabel(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  )
}