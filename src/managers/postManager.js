const apiURL = "http://localhost:8000";

export const addPost = async (post) => {
  console.log(post);
  const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  };

  const response = await fetch(`${apiURL}/posts`, postOptions);
  return await response.json();
};
