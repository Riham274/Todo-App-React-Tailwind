import { useState } from "react";
import TodoForm from "./components/AddForm";
import TodoItem from "./components/TodoITem";
import TodoList from "./components/TodoList";

function App() {
  const [items, setItems] = useState([
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "NextJS",
  ]);
  const [newItem, setNewItem] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, newItem]);
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow p-6 rounded-2xl w-full max-w-md">
        <h1 className="text-center text-2xl font-bold mb-4">To Do List</h1>

        <TodoForm newItem={newItem} setNewItem={setNewItem} addItem={addItem} />

        <TodoList items={items} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
