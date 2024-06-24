import { useState } from "react";

// Receives "value" prop from Board to display
function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X"); // calling "set" function rerenders component
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

/* keywords */
// "export": lets other files access this function
// "default": tells other files this is the main function
export default function Board() {
  // must return all JSX within one parent tag (<></> is a "fragment")
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
