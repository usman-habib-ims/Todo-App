import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/todos", // NestJS API base
});

// Get all todos
export const getTodos = () => API.get("/");

// Create new todo
export const createTodo = (title) => API.post("/", { title });

// Toggle completion
export const toggleTodo = (id, title, isCompleted) =>
  API.patch(`/${id}`, { title, isCompleted });

// Delete todo
export const deleteTodo = (id) => API.delete(`/${id}`);
