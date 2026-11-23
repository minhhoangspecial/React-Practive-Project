import { useState } from "react";

function Todo({ task, description }) {
  function handleClick() {
    setText("Deleted");
  }
  const [text, setText] = useState("Delete");
  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <p>{description}</p>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Todo;
