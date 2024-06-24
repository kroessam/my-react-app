// Receives "value" prop from Board to display
function Square({ value }) {
  return <button className="square">{value}</button>;
}

/* keywords */
// "export": lets other files access this function
// "default": tells other files this is the main function
export default function Board() {
  // must return all JSX within one parent tag (<></> is a "fragment")
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
