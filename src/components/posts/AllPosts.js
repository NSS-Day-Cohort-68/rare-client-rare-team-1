import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllPosts } from "../../managers/postManager"
import "./Posts.css"

export const AllPosts = () => {
  const navigate = useNavigate()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts().then((res) => setPosts(res))
  }, [])

  const capitalized = (phrase) => {
    return phrase.charAt(0).toUpperCase() + phrase.slice(1)
  }

  return (
    <div className="all-posts-global-container">
      <h2>All Posts</h2>
      <ul className="post-list">
        <li className="post-list-header">
          <div className="list-column header-title">Title</div>
          <div className="list-column header-author">Author</div>
          <div className="list-column header-category">Category</div>
        </li>
        {posts.map((p) => (
          <li
            key={`post-${p.id}`}
            className="post-list-item"
            onClick={() => {
              navigate(`/posts/${p.id}`)
            }}
          >
            <div className="list-column item-title">{capitalized(p.title)}</div>
            <div className="list-column item-author">{p.user?.username}</div>
            <div className="list-column item-category">
              {p.category.label ? capitalized(p.category.label) : ""}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
