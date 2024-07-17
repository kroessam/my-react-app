import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <Button color="primary" onClick={handleClick}>My Button</Button>
    </div>
  );
}

export default App;
