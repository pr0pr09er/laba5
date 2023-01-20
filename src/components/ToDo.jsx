import React from "react";
import { useState } from "react";
import "../App.css";
function ToDo() {
  const [tasks, setTasks] = useState([
    {id: 1, name: "Task1", state: true},
    {id: 2, name: "Task2", state: true},
    {id: 3, name: "Task3", state: true},
  ]);

  const [id, setId] = useState(4);
  const [title, setTitle] = useState('');
  const [editName, setEditName] = useState('');
  const [checked, setChecked] = useState(true);
  const addNew = () => {
    let obj = {
      id: id,
      name: title,
    };
    const copy = Object.assign([], tasks);
    setTitle('');
    copy.push(obj);
    setTasks(copy);
    setId(id + 1);
  };

  const removeElement = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const editElement = (item) => {
    const data = {
      id: item.id,
      name: editName,
    }
    setTasks(tasks.map(task => task.id === item.id ? data : task))
    setEditName('')
  };

  function changeCheckbox (item) {
    setChecked(item.state);
    item.state = !checked;

  }

  return (
    <div className="wrapper">
      <div className="header">
        <div className="todo__header">
          <h1>todos</h1>
        </div>
      </div>
      <div className="">
        <div>
          <input onChange={event => setTitle(event.target.value)} type="text" />
          <button onClick={addNew}>Submit</button>
        </div>
        <div>
          {tasks.map((item) => (
            <div key={item.id}>
              <input type="checkbox" checked={item.state} onChange={() => changeCheckbox(item)} id={item.id} />
              <p onClick={() => editElement(item)}>
                {item.id}/{item.name}
              </p>
              <button onClick={() => removeElement(item.id)}>Delete</button>
            </div>
          ))}
          <input
            value={editName}
            type="text"
            onChange={(event) => setEditName(event.target.value)}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ToDo;
