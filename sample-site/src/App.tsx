import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Combiner from "./components/Combiner";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(-5);


  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Title text="My React App Using TypeScript" />
        <div className="d-flex justify-content-around">
          <Counter header="1st Number" amt={num1} />
          <Counter header="2nd Number" amt={num2} />
          <Combiner />
        </div>
      </main>
    </>
  );
}

export default App;
