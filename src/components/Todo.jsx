import { useState } from "react";

function Todo({ task }) {
  function deleteHandler() {
    console.log(task);
    setText("Deleted");
  }
  const [text, setText] = useState("Delete");
  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <button
        onClick={() => {
          deleteHandler();
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Todo;
