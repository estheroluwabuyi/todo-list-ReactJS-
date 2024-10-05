import { useState } from "react";
import Header from "./Header";
import TodoContainer from "./TodoContainer";
import Form from "./Form";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [option, setOption] = useState("All");

  function handleAddInputs() {
    const newItem = { input, id: Date.now(), isCompleted: false };

    if (!input) return;
    setTasks([...tasks, newItem]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddInputs();
    setInput("");
  }

  function handleDelete(id) {
    if (window.confirm("Do you really want to delete this task?")) {
      setTasks((items) => items.filter((item) => item.id !== id));
    }
  }

  return (
    <div>
      <Header />
      <Form
        onHandleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
        option={option}
        setOption={setOption}
      />
      <TodoContainer
        tasks={tasks}
        onHandleDelete={handleDelete}
        option={option}
      />
    </div>
  );
}
