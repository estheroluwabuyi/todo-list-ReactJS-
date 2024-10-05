import { useState } from "react";

export default function List({ item, handleDelete }) {
  const [edit, setEdit] = useState(false);
  const [check, setCheck] = useState(item.isCompleted);

  const handleEdit = function () {
    setEdit(!edit);
    setCheck(false);
  };

  const handleCheck = function () {
    setCheck((prevCheck) => !prevCheck);
    item.isCompleted = !item.isCompleted;
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
