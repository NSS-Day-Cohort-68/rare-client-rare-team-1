const apiURL = "http://localhost:8000"

export const addTag = async (tag) => {
  const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tag),
  }

  const response = await fetch(`${apiURL}/tags`, postOptions)
  return await response.json()
}

export const getSortedTags = async () => {
  const response = await fetch(`${apiURL}/tags`)
  const alphabetizedTags = await response.json()
  return alphabetizedTags
}
