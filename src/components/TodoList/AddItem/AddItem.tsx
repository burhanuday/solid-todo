import { Component, createSignal } from "solid-js";

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
    <div>
      <label for="new-todo">New todo</label>
      <br />
      <input
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
