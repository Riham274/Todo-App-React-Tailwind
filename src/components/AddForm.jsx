function TodoForm({ newItem, setNewItem, addItem }) {
  return (
    <form className="flex gap-2 mb-4" onSubmit={addItem}>
      <input
        className="flex-1 border rounded px-3 py-2"
        type="text"
        value={newItem}
        placeholder="Add new item"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
