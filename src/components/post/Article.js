export const ArticleInputField = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Article Content"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default ArticleInputField;
