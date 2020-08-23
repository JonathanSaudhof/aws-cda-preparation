import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const backendUri = process.env.BACKEND_URI || "http://127.0.0.1:3000/todo";

const TodoItem = ({
  _id,
  content,
  done,
  timestamp,
  handleDone,
  handleDelete,
}) => {
  return (
    <div className='todo-item-container'>
      <label htmlFor={_id} className='todo-item-label'>
        <input type='checkbox' onChange={handleDone} id={_id} checked={done} />
        {content}
      </label>
      <button onClick={handleDelete} id={_id}>
        Delete
      </button>
    </div>
  );
};

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoData, setTodoData] = useState([]);

  const refreshData = async () => {
    return await axios
      .get("http://127.0.0.1:3000/todo")
      .then((doc) => {
        setTodoData(doc.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    // setTodoData(todos);
    refreshData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoInput === null || todoInput.trim().length === 0) {
      alert("Input field cannot be empty");
      return;
    }
    axios
      .post(backendUri, { content: todoInput })
      .then((doc) => {
        // console.log("created todo", doc);
        setTodoInput("");
        return refreshData();
      })
      .then(() => {
        console.log("refreshed");
      })
      .catch((err) => console.error(err));
    refreshData();
  };

  const handleDone = (event) => {
    // console.log("id", event.target.id, "checked", event.target.checked);
    if (!event.target.id) {
      return;
    }
    axios
      .put(`${backendUri}/${event.target.id}`, {
        done: event.target.checked,
      })
      .then(() => {
        return refreshData();
      })
      .then()
      .catch((err) => console.error(err.message));
  };

  const handleDelete = (event) => {
    // console.log("id", event.target.id, "checked", event.target.checked);
    if (!event.target.id) {
      return;
    }
    axios
      .delete(`${backendUri}/${event.target.id}`)
      .then(() => {
        return refreshData();
      })
      .then()
      .catch((err) => console.error(err.message));
  };

  return (
    <div className='App'>
      <h1>My First Todo-App Ever</h1>
      <div className='todo-container'>
        <form action='submit' method='post' onSubmit={handleSubmit}>
          <input
            type='text'
            name='todo'
            value={todoInput}
            placeholder='to do'
            onChange={(event) => {
              setTodoInput(event.target.value);
            }}
          />
          <input type='submit' value='add' />
        </form>
        {todoData.map((item) => (
          <TodoItem
            key={item._id}
            {...item}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
