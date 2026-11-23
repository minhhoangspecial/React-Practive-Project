import "./App.css";
import Todo from "./components/Todo";
import TodoTitle from "./components/TodoTitle";
import Popup from "./components/Popup";

function App() {
  return (
    <>
      <TodoTitle />
      <div>
        <input
          type="text"
          className="box"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button>Add to do</button>
      </div>
      <Todo task="Learn React" />
      <Todo task="Finish ASAP Frontend" />
      <Todo task="Land a junior job" />
      <Todo task="Earn $100k" />
      <Popup message="Are you sure?" />
    </>
  );
}

export default App;
