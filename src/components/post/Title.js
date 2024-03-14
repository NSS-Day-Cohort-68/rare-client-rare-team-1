import React from "react";

export const TitleInputField = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Title"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TitleInputField;
