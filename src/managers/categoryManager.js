const apiURL = "http://localhost:8000";

export const getCategories = async () => {
  const response = await fetch(`${apiURL}/categories`);
  return await response.json();
};
