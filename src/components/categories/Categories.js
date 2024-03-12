import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Categories = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://localhost:8000/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const fetchedCategories = await response.json()

      setCategories(fetchedCategories)
    };

    fetchCategories()
  }, []);

  const handleCreateCategory = () => {
    navigate("/create-category")
  }

  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      
      <button onClick={handleCreateCategory}>Create Category</button>
    </div>
  )
}