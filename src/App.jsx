import "./App.css";
import Todo from "./components/Todo";
import TodoTitle from "./components/TodoTitle";
import Popup from "./components/Popup";

function App() {
  return (
    <>
      <TodoTitle />
      <Todo task="Learn React" description="Code along and take notes" />
      <Todo task="Finish ASAP Frontend" description="3 hours everyday" />
      <Todo
        task="Land a junior job"
        description="Apply to jobs 2 hours everyday"
      />
      <Todo task="Earn $100k" description="Live life and relax" />
      {/* <Popup message="Are you sure?"/> */}
    </>
  );
}

export default App;
