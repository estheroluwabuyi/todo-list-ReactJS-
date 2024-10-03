import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <Form
        input={input}
        setInput={setInput}
        setTasks={setTasks}
        tasks={tasks}
      />
      <TodoContainer tasks={tasks} />
    </div>
  );
}

function Header() {
  return <h1 className="todo-header">Todo List</h1>;
}

function Form({ input, setInput, tasks, setTasks }) {
  function handleAddInputs() {
    const newItem = { input, packed: false, id: Date.now() };

    if (!input) return;
    setTasks([...tasks, newItem]);
    console.log(newItem);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddInputs();
    setInput("");
  }
  const [option, setOption] = useState("All");

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="btn-input-container">
        <section className="input-icon">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input"
            placeholder="Add a Task..."
          />

          <button type="submit" className="input-btn" onSubmit={handleSubmit}>
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </section>

        <section className="select-icon">
          <select
            id="choices"
            className="options"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>
          <button className="option-btn">
            <ion-icon name="play-outline"></ion-icon>
          </button>
        </section>
      </div>
    </form>
  );
}

function TodoContainer({ tasks }) {
  return (
    <div>
      {tasks.map((i) => (
        <List item={i} key={i.id} />
      ))}
    </div>
  );
}

function List({ item }) {
  const [edit, setEdit] = useState(false);

  const handleEdit = function () {
    setEdit(!edit);
  };

  return (
    <div className="todo-list-list">
      <p
        className="todo-list-list__texts"
        contentEditable={edit}
        suppressContentEditableWarning={true}
      >
        {item.input}
      </p>

      <div className="todo-list-list__btns">
        <button className="btn-icons btn-1" onClick={handleEdit}>
          <ion-icon name=""></ion-icon>
          {/* create-outline */}

        </button>

        <button className="btn-icons btn-2">
          <ion-icon name="checkmark-outline"></ion-icon>
        </button>

        <button className="btn-icons btn-3">
          <ion-icon name="trash-bin-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
