import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  markAsDone,
  markAllDone,
  deleteAll,
} from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const allDone = todos.every((todo) => todo.isDone);
  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const markDoneHandler = (id) => {
    dispatch(markAsDone(id));
  };

  const markAllDoneHandler = () => {
    dispatch(markAllDone());
  };

  const deleteAllHandler = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all tasks?",
    );

    if (confirmDelete) {
      dispatch(deleteAll());
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Todo List App</h2>
      <p className="counter">
        Completed: {todos.filter((todo) => todo.isDone).length} / {todos.length}
      </p>
      <AddForm />
      {todos.length === 0 ? (
        <p className="empty-message">Add your first task</p>
      ) : (
        <ol className="task-list">
          {todos.map((todo) => (
            <li key={todo.id} className="task-item">
              <span className={`task-text ${todo.isDone ? "completed" : ""}`}>
                {todo.task}
              </span>

              <button
                className="done-btn"
                onClick={() => markDoneHandler(todo.id)}
              >
                {todo.isDone ? "Undo" : "Done"}
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTodoHandler(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      )}
      {todos.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <button
            className="done-btn"
            onClick={markAllDoneHandler}
            disabled={allDone}
          >
            Mark All Done
          </button>

          <button
            className="delete-btn"
            onClick={deleteAllHandler}
            style={{ marginLeft: "10px" }}
          >
            Delete All
          </button>
        </div>
      )}
    </div>
  );
}
