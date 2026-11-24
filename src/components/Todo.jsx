function Todo({ task, setPopupOpen }) {
  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <button onClick={() => setPopupOpen(true)}>Delete</button>
    </div>
  );
}

export default Todo;
