function Button({ text, onClick, color = "bg-gray-500" }) {
  color;
  return (
    <button
      className={`px-3 py-1 ${color} text-white rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default Button;
