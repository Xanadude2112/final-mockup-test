import { useState } from "react";
import "../styles/TodoList.scss";
import TodoListItem from "../components/TodolistItem"; // Make sure the file name is correctly spelled

function TodoList({ todoListItem, addTodoListItem }) {
  const [showInput, setShowInput] = useState(false);
  const [newTodoItem, setNewTodoItem] = useState('')
 
  const handleAddTodoItem = () => {
    setShowInput(prevInput => !prevInput);
  };
 
  const handleAddTodoChange = (event) => {
    if(event.target.value.length >= 0){
      setNewTodoItem(event.target.value)
    }
  }

  const handleTodoSubmit = () => {
    if (newTodoItem.trim().length <= 0) {
      const todoItem = document.getElementsByClassName("add-todo-item")[0];
      todoItem.classList.add("error");

      setTimeout(function () {
        todoItem.classList.remove("error");
      },800)
    } else {
      addTodoListItem(newTodoItem);
      setNewTodoItem('');
    }
  }

  return (
    <div className="todo-master">
      <h2 className="todo-title">
        To do list <i className="fa-solid fa-plus plus" onClick={handleAddTodoItem}></i>
      </h2>
      {showInput && (
        <div className="new-todo-list-item">
          <div className="check-add"></div>
          <input className="add-todo-item" type="text" value={newTodoItem} onChange={handleAddTodoChange} placeholder="Add new to do list item" />
          <i className="fa-solid fa-circle-check todo-submit" onClick={handleTodoSubmit}></i>
        </div>
      )}
      <div className="todo-list">
        {todoListItem.map((todoList) => 
          <TodoListItem key={todoList.id} id={todoList.id} text={todoList.text}/>
        )}
      </div>
    </div>
  );
}

export default TodoList;
