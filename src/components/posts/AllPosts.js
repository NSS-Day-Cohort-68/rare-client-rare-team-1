import { useEffect, useState } from "react"
import { getAllPosts } from "../../managers/postManager"
import "./Posts.css"
import { Link } from "react-router-dom"

export const AllPosts = () => {
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
          <Link to={`/post-details/${p.id}`} className="post-link" key={`post-${p.id}`}>
            <li key={`post-${p.id}`} className="post-list-item">
              <div className="list-column item-title">{capitalized(p.title)}</div>
              <div className="list-column item-author">{p.user?.username}</div>
              <div className="list-column item-category">
                {p.category.label ? capitalized(p.category.label) : ""}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
