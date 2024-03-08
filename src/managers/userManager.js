const apiURL = "http://localhost:8000"

export const register_user = async (user) => {
  const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }

  const response = await fetch(`${apiURL}/users`, postOptions)
  return await response.json()
}

export const check_for_duplicate_username = async (username) => {
  const response = await fetch(`${apiURL}/users?username=${username}`)
  const duplicate_results = await response.json()
  return duplicate_results
}
