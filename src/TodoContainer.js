import  List  from "./List";

export default function TodoContainer({ tasks, onHandleDelete, option }) {
  const filteredTasks = tasks.filter((task) => {
    if (option === "Completed") return task.isCompleted;
    if (option === "Uncompleted") return !task.isCompleted;
    return true;
  });

  return (
    <div>
      {filteredTasks.map((i) => (
        <List item={i} key={i.id} handleDelete={onHandleDelete} />
      ))}
    </div>
  );
}
