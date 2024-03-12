const apiURL = "http://localhost:8000"

export const getAllPosts = async () => {
  const response = await fetch(`${apiURL}/posts`)
  const posts = await response.json()
  return posts
}
