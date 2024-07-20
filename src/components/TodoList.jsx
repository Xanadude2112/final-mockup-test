import { useState } from "react";
import "../styles/TodoList.scss";
import TodoListItem from "./TodolistItem";

function TodoList({ todoListItem }) {
 
  return (
    <div className="todo-master">
      <h2 className="todo-title">
        Todo List <i className="fa-solid fa-plus plus"></i>
      </h2>
      <div className="todo-list">
        {todoListItem.map((todoList) => 
        <TodoListItem id={todoList.id} text={todoList.text}/>
        )}
      </div>
    </div>
  );
}

export default TodoList;
