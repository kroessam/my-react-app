import { useState } from "react";

// Receives "value" prop from Board to display
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

/* keywords */
// "export": lets other files access this function
// "default": tells other files this is the main function
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return; // do not place a tile if square is occupied
    }

    const newSquares = squares.slice(); // create a copy of squares array

    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O"
    }
    
    setSquares(newSquares); // reassign to squares variable
    setXIsNext(!xIsNext);
  }

  // must return all JSX within one parent tag (<></> is a "fragment")
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
