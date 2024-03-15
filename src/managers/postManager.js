const apiURL = "http://localhost:8000"

export const getAllPosts = async () => {
  const response = await fetch(`${apiURL}/posts`)
  const posts = await response.json()
  return posts
}

export const addPost = async (post) => {
  const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  }

  const response = await fetch(`${apiURL}/posts`, postOptions)
  return await response.json()
}

export const getPosts = () => {
  return fetch(`${apiURL}/`)
}

export const getPost = (postId) => {
  return fetch(`${apiURL}/posts/${postId}`)
    .then(response => response.json())
}