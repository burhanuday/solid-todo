import { Component } from "solid-js";
import "./TodoItem.css";

interface TodoItemProps {
  todo: string;
  handleClick: (todoToRemove: string) => void;
}

const TodoItem: Component<TodoItemProps> = (props) => {
  return (
    <div
      class="todoitem__container"
      onClick={() => props.handleClick(props.todo)}
    >
      {props.todo}
    </div>
  );
};

export default TodoItem;
