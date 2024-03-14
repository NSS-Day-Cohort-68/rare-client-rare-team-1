const apiURL = "http://localhost:8000"

export const addComment = async (comment) => {
  const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  }

  const response = await fetch(`${apiURL}/comments`, postOptions)
  return await response.json()
}