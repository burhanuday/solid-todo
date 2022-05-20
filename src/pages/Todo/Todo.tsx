import { Component } from "solid-js";
import TodoList from "../../components/TodoList/TodoList";
import "./Todo.css";

const Todo: Component = () => {
  return (
    <div class="todo__container">
      <TodoList />
    </div>
  );
};

export default Todo;
