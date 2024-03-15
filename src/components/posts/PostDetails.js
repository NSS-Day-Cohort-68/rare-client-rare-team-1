import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../../managers/postManager'
import "./PostDetails.css"

export const PostDetails = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    getPost(postId).then((res) => {
      setPost(res)
    })
  }, [postId])

  if (!post) {
    return <div>Loading post details...</div>
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`
  }

  return (
    <div className="post-details-container">
      <h1>{post.post_title}</h1>
      {post.image_url && <img src={post.image_url} alt={post.post_title} className="post-header-image" />}
      <div className="post-content">{post.post_content}</div>
      <div className="post-publication-date">Published on: {formatDate(post.publication_date)}</div>
      <div className="post-author">Author: {post.username || 'Unknown'}</div>
    </div>
  )
}