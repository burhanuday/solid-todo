import { Component, createSignal, For } from "solid-js";
import AddItem from "./AddItem/AddItem";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

const TodoList: Component = () => {
  const [todos, setTodos] = createSignal<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos((todos) => todos.concat(newTodo));
  };

  const removeTodo = (todoToRemove: string) => {
    setTodos((todos) => todos.filter((todo) => todo !== todoToRemove));
  };

  return (
    <div>
      <AddItem addTodo={addTodo} />
      <ul class="todolist__container">
        <For each={todos()} fallback={<div>No todos</div>}>
          {(item, index) => (
            <li data-index={index()}>
              <TodoItem handleClick={removeTodo} todo={item} />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default TodoList;
