const apiURL = "http://localhost:8000"

export const register_user = (user) => {
  const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }

  const response = await fetch("http://localhost:800-0")
}
