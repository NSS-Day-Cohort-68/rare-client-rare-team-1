import { useEffect, useState } from "react";
// import { CategorySelectDropdown } from "../post/Category.js";
import { getCategories } from "../../managers/categoryManager.js";
import { addPost } from "../../managers/postManager.js";

export const CreatePostForm = () => {
  const [post, setPost] = useState({
    user_id: 0,
    category_id: 0,
    title: "",
    publicationDate: new Date().toISOString().slice(0, 10),
    image_url: "",
    content: "",
    approved: 0,
  });
  const [categories, setCategories] = useState([]);

  // useEffect to fetch categories from api via service/manager
  // store fetched categories using setCategories
  // inside form render a dropdown menu using <select> and map through categories using <option> tag for each category with value (of  & key/value pair) being ID
  // handleCategorySelect to store selected category
  // handlePublish to handle storing object permanently in api

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
    console.log(categories);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleCategorySelect = (e) => {
    setPost({ ...post, category: e.target.value });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    addPost(post).then(() => {
      console.log(post);
    });
  };

  if (categories.length === -1) {
    return <></>;
  }

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <form onSubmit={handlePublish} style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "left " }}>New Post</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <fieldset style={{ border: "none" }}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                name="title"
                value={post.title}
                onChange={handleInputChange}
                style={{
                  width: "200px",
                  height: "25px",
                  borderColor: "gray",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            </div>
          </fieldset>
          <fieldset style={{ border: "none" }}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Image URL"
                name="imageURL"
                value={post.imageURL}
                onChange={handleInputChange}
                style={{
                  width: "200px",
                  height: "25px",
                  borderColor: "lightgray",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            </div>
          </fieldset>
          <fieldset style={{ border: "none" }}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Article content"
                name="content"
                value={post.content}
                onChange={handleInputChange}
                style={{
                  width: "300px",
                  height: "100px",
                  borderColor: "lightgray",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            </div>
          </fieldset>
          <fieldset style={{ border: "none" }}>
            <div className="form-group">
              <select onChange={handleCategorySelect}>
                <option>Category Select</option>
                {categories.map((category) => {
                  return (
                    <option
                      key={`category--${category.id}`}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </fieldset>
          <div>
            <fieldset style={{ border: "none" }}>
              <label style={{ margin: "5px" }}>
                <input type="checkbox" />
                Tag
              </label>
              <label style={{ margin: "5px" }}>
                <input type="checkbox" />
                Tag
              </label>
              <label style={{ margin: "5px" }}>
                <input type="checkbox" />
                Tag
              </label>
              <label style={{ margin: "5px" }}>
                <input type="checkbox" />
                Tag
              </label>
              <label style={{ margin: "5px" }}>
                <input type="checkbox" />
                Tag
              </label>
            </fieldset>
          </div>
          <fieldset style={{ border: "none" }}>
            <div className="form-group">
              <button
                type="submit"
                className="form-btn"
                style={{
                  backgroundColor: "#8a2be2",
                  padding: ".5em 1em",
                  borderRadius: "4px",
                  color: "white",
                }}
              >
                Publish
              </button>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  );
};
