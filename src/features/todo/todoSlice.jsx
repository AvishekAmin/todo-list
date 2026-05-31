import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); //direct mutation
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    markAsDone: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },

    markAllDone: (state) => {
      state.todos.forEach((todo) => {
        todo.isDone = true;
      });
    },

    deleteAll: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, deleteTodo, markAsDone, markAllDone, deleteAll } = todoSlice.actions;
export default todoSlice.reducer;
