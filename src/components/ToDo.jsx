import React from "react";
import { useState } from "react";
import "../App.css";
function ToDo() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task1", state: true },
    { id: 2, name: "Task2", state: true },
    { id: 3, name: "Task3", state: true },
  ]);

  const [id, setId] = useState(4);
  const [title, setTitle] = useState("");
  const [editName, setEditName] = useState("");
  const [checked, setChecked] = useState(false);
  const [editedId, setEditedId] = useState(null);

  const addNew = () => {
    let obj = {
      id: id,
      name: title,
    };
    const copy = Object.assign([], tasks);
    setTitle("");
    copy.push(obj);
    setTasks(copy);
    setId(id + 1);
  };

  const removeElement = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const changeText = (value) => {
    if (editedId != null) {
      setEditName(value);
      const data = {
        id: editedId,
        name: value,
        state: true
      };
      setTasks(tasks.map((task) => (task.id === editedId ? data : task)));
    }
  };

  const startEdit = (item) => {
    setEditedId(item.id);
    setEditName(item.name);
  };

  const stopEdit = () => {
    console.log("ok");
    setEditedId(null);
    setEditName("");
  };

  function changeCheckbox(item) {
    setChecked(item.state);
    item.state = !item.state;
  }

  return (
    <div>
      <div className="header">
        <div className="todo__header">
          <h1>todos</h1>
        </div>
      </div>
      <div className="main">
        <div className="root">
          <input
            className="mainInput"
            onChange={(event) => setTitle(event.target.value)}
            type="text"
          />
          <button className="btn-none" onClick={addNew}>
            Submit
          </button>
        </div>
        <div className="main__tasks">
          {tasks.map((item) => (
            <div key={item.id} className="main__task">
              <input
                type="checkbox"
                onChange={() => changeCheckbox(item)}
                id={item.id}
              />
              <p className={item.state ? "notChecked" : "checked"} onClick={() => startEdit(item)}>
                {item.id}/{item.name}
              </p>
              <button className="main__btn" onClick={() => removeElement(item.id)}>Delete</button>
            </div>
          ))}
          <input className="editInput"
            value={editName}
            onBlur={stopEdit}
            type="text"
            onChange={(event) => changeText(event.target.value)}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ToDo;
