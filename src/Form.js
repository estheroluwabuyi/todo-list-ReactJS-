export default function Form({
  input,
  setInput,
  onHandleSubmit,
  option,
  setOption,
}) {
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

          <button type="submit" className="input-btn">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </section>

        <section className="select-icon">
          <select
            id="choices"
            className="options"
            value={option}
            onChange={(e) => setOption(e.target.value)} // Update option when changed
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
