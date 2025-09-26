import TodoItem from "./TodoITem";

function TodoList({ items, deleteItem }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          deleteItem={() => deleteItem(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
