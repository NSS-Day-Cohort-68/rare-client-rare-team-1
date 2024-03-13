import React from "react";

export const ContentField = ({ value, onChange }) => {
  return (
    <textarea
      type="text"
      placeholder="Article content"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={6}
      cols={10}
    />
  );
};

export default ContentField;
