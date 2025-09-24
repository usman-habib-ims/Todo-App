// import React, { useEffect, useRef, useState } from "react";
// import { RiTodoFill } from "react-icons/ri";
// import TodoItems from "./TodoItems";

// export default function Todo() {
//   const [todoList, setTodoList] = useState(
//     localStorage.getItem("todos")
//       ? JSON.parse(localStorage.getItem("todos"))
//       : []
//   );

//   const inputRef = useRef();

//   const add = () => {
//     const inputText = inputRef.current.value.trim();

//     if (inputText === " ") {
//       return null;
//     }

//     const newTodo = {
//       id: Date.now(),
//       text: inputText,
//       isComplete: false,
//     };
//     setTodoList((prev) => [...prev, newTodo]);
//     inputRef.current.value = "";
//   };

//   const deleteTodo = (id) => {
//     setTodoList((prvTodos) => {
//       return prvTodos.filter((todo) => todo.id !== id);
//     });
//   };

//   const toggle = (id) => {
//     setTodoList((prevTodos) => {
//       return prevTodos.map((todo) => {
//         if (todo.id === id) {
//           return { ...todo, isComplete: !todo.isComplete };
//         }
//         return todo;
//       });
//     });
//   };

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todoList));
//   }, [todoList]);

//   return (
//     <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
//       {/* ----------------title----------------- */}

//       <div className="flex items-center mt-7 gap-2 ">
//         <RiTodoFill className="w-8 h-6" />
//         <h1 className="text-3xl font-semibold">TO-DO LIST</h1>
//       </div>

//       {/* ----------------input box----------------- */}

//       <div className="flex items-center mt-7 bg-gray-200 rounded-full">
//         <input
//           ref={inputRef}
//           className="bg-transparent border-0 outline-none flex-1 h-14 pl-5 pr-2 placeholder:text-slate-600"
//           type="text"
//           placeholder="Add your task"
//         />
//         <button
//           onClick={add}
//           className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer
//         "
//         >
//           Add +
//         </button>
//       </div>

//       {/* ----------------todo list----------------- */}

//       <div>
//         {todoList.map((item, index) => {
//           return (
//             <TodoItems
//               key={index}
//               text={item.text}
//               id={item.id}
//               isComplete={item.isComplete}
//               deleteTodo={deleteTodo}
//               toggle={toggle}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { getTodos, createTodo, toggleTodo, deleteTodo } from "../api/todoApi";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load todos when app starts
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data } = await getTodos();
    setTodos(data);
  };

  const addTodo = async () => {
    if (!newTask.trim()) return;
    await createTodo(newTask);
    setNewTask("");
    fetchTodos();
  };

  const toggle = async (id) => {
    const todo = todos.find((t) => t.id === id);
    await toggleTodo(id, todo.title, !todo.isCompleted);
    fetchTodos();
  };

  const remove = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <h1 className="text-3xl font-semibold mb-4">TO-DO LIST</h1>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={addTodo}
          className="bg-orange-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          id={todo.id}
          text={todo.title}
          isComplete={todo.isCompleted}
          toggle={toggle}
          deleteTodo={remove}
        />
      ))}
    </div>
  );
}
