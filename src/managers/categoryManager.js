const apiURL = "http://localhost:8000";

export const getCategories = async () => {
  return await fetch(`${apiURL}/categories`).then((res) => res.json());
};
