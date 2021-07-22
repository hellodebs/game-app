import { useState } from "react";

export default function InputBar({ onNameChange }) {
  const [name, setName] = useState([""]);

  function handleOnChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onNameChange(name);
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="app__input"
        text="text"
        name="name"
        placeholder="Type name..."
        onChange={handleOnChange}
        value={name}
      />
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
