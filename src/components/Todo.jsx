import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const markDoneHandler = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <div className="container">
      <h2 className="heading">Todo List App</h2>

      <AddForm />

      {todos.length === 0 ? (
        <p className="empty-message">Add your first task</p>
      ) : (
        <ol className="task-list">
          {todos.map((todo) => (
            <li key={todo.id} className="task-item">
              <span
                className="task-text"
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                  opacity: todo.isDone ? 0.6 : 1,
                }}
              >
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
                onClick={() => clickHandler(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
