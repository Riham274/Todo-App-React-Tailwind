import { useState } from "react";

function TodoItem({ item, deleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item);

  return (
    <li className="flex justify-between border rounded px-3 py-2">
      {isEditing ? (
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1 mr-2"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      ) : (
        <span>{text}</span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => setIsEditing(false)}
          >
            Save
          </button>
        ) : (
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="px-3 py-1 bg-red-500 text-white rounded"
          onClick={deleteItem}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;