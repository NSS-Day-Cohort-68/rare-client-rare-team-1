const apiURL = "http://localhost:8000";

export const postTagManager = async (posttags) => {
  const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(posttags),
  };
  const response = await fetch(`${apiURL}/posttags`, postOptions);
  return await response.json();
};
