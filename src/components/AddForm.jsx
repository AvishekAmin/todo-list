import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!task.trim()) return;

    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="task-form">
        <input
          type="text"
          value={task}
          className="task-input"
          placeholder="Enter a task..."
          onChange={(event) => setTask(event.target.value)}
        ></input>
        <button className="add-btn">Add Task</button>
      </form>
    </div>
  );
}
