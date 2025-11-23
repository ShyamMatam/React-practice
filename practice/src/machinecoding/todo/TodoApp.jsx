// import React, { useState } from "react";

// export default function TodoApp() {

//   // text: stores the value typed in the input box
//   const [text, setText] = useState("");

//   // todos: array which stores all todo objects
//   const [todos, setTodos] = useState([]);

//   // ---------------------------
//   // Add a new todo
//   // ---------------------------
//   const handleAddTodo = () => {
//     if (text.trim() === "") {
//       return; // do nothing if empty
//     }

//     // create a new todo object
//     const newTodo = {
//       id: Date.now(),
//       text: text,
//       completed: false
//     };

//     // create a new array and add the new todo
//     const updatedTodos = [...todos, newTodo];

//     // update state
//     setTodos(updatedTodos);

//     // clear input box
//     setText("");
//   };

//   // ---------------------------
//   // Toggle completed state
//   // ---------------------------
//   const handleToggleTodo = (id) => {
//     const updatedList = todos.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           completed: !item.completed
//         };
//       } else {
//         return item;
//       }
//     });

//     setTodos(updatedList);
//   };

//   // ---------------------------
//   // Delete a todo
//   // ---------------------------
//   const handleDeleteTodo = (id) => {
//     const remainingTodos = todos.filter((item) => {
//       return item.id !== id;
//     });

//     setTodos(remainingTodos);
//   };

//   return (
//     <div style={{ width: "350px", margin: "40px auto" }}>
//       <h2>Todo App</h2>

//       {/* Input box */}
//       <input
//         type="text"
//         value={text}
//         placeholder="Enter a todo..."
//         onChange={(event) => setText(event.target.value)}
//         style={{ width: "68%", padding: "6px" }}
//       />

//       {/* Add button */}
//       <button
//         onClick={handleAddTodo}
//         style={{ padding: "7px 12px", marginLeft: "8px" }}
//       >
//         Add
//       </button>

//       {/* Todo List */}
//       <ul style={{ marginTop: "20px", padding: 0 }}>
//         {todos.map((todoItem) => {
//           return (
//             <li
//               key={todoItem.id}
//               style={{
//                 listStyle: "none",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginBottom: "10px"
//               }}
//             >
//               {/* Click to toggle */}
//               <span
//                 onClick={() => handleToggleTodo(todoItem.id)}
//                 style={{
//                   cursor: "pointer",
//                   textDecoration: todoItem.completed ? "line-through" : "none"
//                 }}
//               >
//                 {todoItem.text}
//               </span>

//               {/* Delete button */}
//               <button onClick={() => handleDeleteTodo(todoItem.id)}>
//                 Delete
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

import React from "react";
import { useState } from "react";

const TodoApp = () => {
  const [input, setInput] = useState("");
  //take the todos in the array
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = () => {

    if(input.trim() === "" ) return ;

    const item = {
      id: todoList.length + 1 /* we can also take 0 or date.now() */,
      text: input,
      completed: false,
    };

    //alredy existing items(prev)  + newItem(item)
    setTodoList((prev) => [...prev, item]);

    //clear input after adding item
    setInput("");
  };

  const toggleCompleted = (id) => {
 // map creates a new array; only the matching item is replaced with a new object
    const updatedList = todoList.map((t) => {
        if (t.id === id) {
          return {
            ...t,      // keep other fields the same
            completed: !t.completed,    // flip the boolean
          };
        } else { 
          return t;  // unchanged items are returned as-is
        }
      }); 

    setTodoList(updatedList);

  };


  const deleteTodo = (id) => {

    const remainingTodos = todoList.filter((t) => t.id !== id)
    setTodoList(remainingTodos)
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodoItem()}>Add</button>
        {todoList.map((t) => (
          <li key={t.id}>
            {/* for checkbox we have checked attribute */}
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />
            <span className={t.completed ? "strike-through" : ""}>
              {t.text}
            </span>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
