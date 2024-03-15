import { useEffect, useState } from "react";
import { getSortedTags } from "../../managers/tagManager.js";
import { useNavigate } from "react-router-dom";
import { postTagManager } from "../../managers/postTagManager.js";

export const PostTag = ({ currentPostId }) => {
  const [tags, setTags] = useState([]);
  const [checkedTags, setCheckedTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSortedTags().then((res) => setTags(res));
  }, []);

  const handleSave = () => {
    for (const posttag of checkedTags) {
      postTagManager(posttag).then((res) => {
        console.log("Tag(s) added successfully:", res);
      });
    }
    navigate("/post-details");
  };

  const handleClick = (e, tag) => {
    const tagsArrayCopy = [...checkedTags];
    const postTagObject = { post_id: { currentPostId }, tag_id: tag.id };

    if (e.target.checked) {
      tagsArrayCopy.push(postTagObject);
    } else {
      const found = tagsArrayCopy.findIndex(
        (postTag) => postTag.tag_id === tag.id
      );
      tagsArrayCopy.splice(found, 1);
    }
    setCheckedTags(tagsArrayCopy);
  };

  return (
    <div>
      <fieldset style={{ border: "none" }}>
        {tags.map((tag) => (
          <div key={tag.id} style={{ margin: "5px" }}>
            <label>
              <input
                type="checkbox"
                value={tag.id}
                onChange={(e) => {
                  handleClick(e, tag);
                }}
              />
              {tag.label}
            </label>
          </div>
        ))}
      </fieldset>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};
