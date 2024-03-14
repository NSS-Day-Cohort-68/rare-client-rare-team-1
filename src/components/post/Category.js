import React from "react";

export const CategorySelectDropdown = ({ options, onSelect }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    onSelect(selectedValue);
  };
  return (
    <select onChange={handleChange}>
      <option value="" disabled selected>
        Category Select
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
