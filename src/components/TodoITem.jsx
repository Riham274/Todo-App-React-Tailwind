import { useState } from "react";
import Button from "./Button";

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
          //new components
          <Button
            text="Save"
            onClick={() => setIsEditing(false)}
            color="bg-blue-500"
          />
        ) : (
          <Button
            text="Edit"
            onClick={() => setIsEditing(true)}
            color="bg-blue-500"
          />
        )}
        <Button text="Delete" onClick={deleteItem} color="bg-red-500" />
      </div>
    </li>
  );
}

export default TodoItem;
