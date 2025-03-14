import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, todo: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const { id, todo } = action.payload;
      const task = state.todos.find((t) => t.id === id);
      if (task) {
        task.todo = todo; // Directly modify the existing object
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; // for components

export default todoSlice.reducer; // for store
