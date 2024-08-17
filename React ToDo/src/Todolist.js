import React, { useState } from "react";
import "./App.css";

function Todolist() {
  const [activity, setActivity] = useState("");
  const [ToDoList, setToDoList] = useState([]);

  const add = () => {
    setToDoList((list) => {
      const updatedList = [...list, activity];
      setActivity("");
      return updatedList;
    });
  };

  const remove = (index) => {
    const newList = ToDoList.filter((_, id) => id !== index);
    setToDoList(newList);
  };

  const removeAll = () => {
    setToDoList([]);
  };

  return (
    <>
      <div className="container">
        <p className="header">TODO LIST</p>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={add}>Add</button>
      </div>
      {ToDoList.length > 0 && (
        <>
          <p className="List-heading">Here is Your List</p>
          {ToDoList.map((item, index) => (
            <div key={index} className="listData">
              {item}
              <button className="remove-btn" onClick={() => remove(index)}>
                Remove(-)
              </button>
            </div>
          ))}
          <button className="remove-all-btn" onClick={removeAll}>
            Remove All
          </button>
        </>
      )}
    </>
  );
}

export default Todolist;
