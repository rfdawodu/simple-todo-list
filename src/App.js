import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [inputName, setInputName] = useState("");

  const addTask = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      completed: false, // add completed property to the todo
    };

    setTaskList([...taskList, newTodo]);

    setInputName("");
  };

  const deleteItem = (id) => {
    const newList = taskList.filter((todo) => todo.id !== id);
    setTaskList(newList);
  };

  const toggleComplete = (id) => {
    const newList = taskList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }; // toggle completed property
      } else {
        return todo;
      }
    });
    setTaskList(newList);
  };

  return (
    <div>
      <h1>Simple Todo List</h1>
      <label>Todos</label>
      <input
        type="text"
        placeholder="put in your todos"
        id="task"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />

      <button onClick={() => addTask(inputName)}>add</button>
      <ul>
        {taskList.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "completed" : ""} // add CSS class based on completed property
          >
            {todo.todo}

            <button className="delete" onClick={() => deleteItem(todo.id)}>
              &times;
            </button>

            <div className="checkbox">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
