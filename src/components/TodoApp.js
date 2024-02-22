import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addAction, removeAction } from "../tools/actions";
import "./styles.css";

function MyTodoApp({ list, addAction, removeAction }) {
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("myList"));
    if (savedList) {
      addSavedItems(savedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(list));
  }, [list]);

  const addSavedItems = (savedList) => {
    savedList.forEach((item) => addAction(item));
  };

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem.trim() !== "") {
      addAction({
        text: newItem,
        timestamp: new Date().toISOString(),
      });
      setNewItem("");
    }
  };

  const handleRemove = (index) => {
    removeAction(index);
  };

  return (
    <div className="my-todo-container">
      <form className="my-todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={handleChange}
          placeholder="Добавить задачи..."
        />
        <button type="submit">📝</button>
      </form>
      <h1 className="my-todo-header">Мои задачи</h1>
      <ul className="my-todo-list">
        {list.map((item, index) => (
          <li className="my-todo-item" key={index}>
            <span>{item.text}</span>
            <button onClick={() => handleRemove(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = {
  addAction,
  removeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTodoApp);
