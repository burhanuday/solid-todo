import { Component, createSignal } from "solid-js";
import "./AddItem.css";

interface AddItemProps {
  addTodo: (newTodo: string) => void;
}

const AddItem: Component<AddItemProps> = (props) => {
  const [input, setInput] = createSignal("");

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key;
    if (key === "Enter") {
      props.addTodo(input());
      setInput("");
    }
  };

  const handleOnInput = (event: InputEvent) => {
    const value = event.target?.value;
    setInput(value);
  };

  return (
    <div class="additem__container">
      <label class="additem__label" for="new-todo">
        New todo
      </label>
      <br />
      <input
        class="additem__input"
        onKeyDown={handleKeyDown}
        id="new-todo"
        placeholder="Enter new todo"
        value={input()}
        onInput={handleOnInput}
      />
    </div>
  );
};

export default AddItem;
