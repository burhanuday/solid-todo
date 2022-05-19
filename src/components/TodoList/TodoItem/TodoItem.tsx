import { Component } from "solid-js";

interface TodoItemProps {
  todo: string;
  handleClick: (todoToRemove: string) => void;
}

const TodoItem: Component<TodoItemProps> = (props) => {
  return <div onClick={() => props.handleClick(props.todo)}>{props.todo}</div>;
};

export default TodoItem;
