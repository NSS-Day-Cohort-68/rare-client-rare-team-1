import React from "react";

export const ImageURLField = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Image URL"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default ImageURLField;
