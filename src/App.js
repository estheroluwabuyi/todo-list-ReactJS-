import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddInputs() {
    const newItem = { input, id: Date.now() };

    if (!input) return;
    setTasks([...tasks, newItem]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddInputs();
    setInput("");
  }

  function handleDelete(id) {
    setTasks((items) => items.filter((item) => item.id !== id));
    // console.log(id);
    window.confirm("Do you really want to delete this task?");
  }

  return (
    <div>
      <Header />
      <Form
        onHandleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
        setTasks={setTasks}
        tasks={tasks}
      />
      <TodoContainer tasks={tasks} onHandleDelete={handleDelete} />
    </div>
  );
}

function Header() {
  return <h1 className="todo-header">Todo List</h1>;
}

function Form({ input, setInput, onHandleSubmit }) {
  const [option, setOption] = useState("All");

  return (
    <form className="form" onSubmit={onHandleSubmit}>
      <div className="btn-input-container">
        <section className="input-icon">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input"
            placeholder="Add a Task..."
          />

          <button type="submit" className="input-btn" onSubmit={onHandleSubmit}>
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

function TodoContainer({ tasks, onHandleDelete }) {
  return (
    <div>
      {tasks.map((i) => (
        <List item={i} key={i.id} handleDelete={onHandleDelete} />
      ))}
    </div>
  );
}

function List({ item, handleDelete }) {
  const [edit, setEdit] = useState(false);
  const [check, setCheck] = useState(false);

  const handleEdit = function () {
    setEdit(!edit);
    setCheck(false);
  };

  const handleCheck = function () {
    setCheck(!check);
    setEdit(false);
  };

  return (
    <div className="todo-list-list">
      <p
        className={
          check === false
            ? "todo-list-list__texts"
            : "strikeText todo-list-list__texts"
        }
        contentEditable={edit}
        suppressContentEditableWarning={true}
      >
        {item.input}
      </p>

      <div className="todo-list-list__btns">
        <button
          className={
            !edit ? "btn-icons btn-1" : "btn-icons btn-1 bookmarkColor"
          }
          onClick={handleEdit}
        >
          <ion-icon
            name={!edit ? "create-outline" : "bookmark-outline"}
          ></ion-icon>
        </button>

        <button className="btn-icons btn-2" onClick={handleCheck}>
          <ion-icon name="checkmark-outline"></ion-icon>
        </button>

        <button
          className="btn-icons btn-3"
          onClick={() => handleDelete(item.id)}
        >
          <ion-icon name="trash-bin-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
