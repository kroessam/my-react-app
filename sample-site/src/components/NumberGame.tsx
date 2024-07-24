import { useState } from "react";
import Counter from "./Counter";
import Combiner from "./Combiner";

const NumberGame = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  const handle1Increment = (incrementAmt: number) => {
    console.log("From " + num1);
    setNum1(num1 + incrementAmt);
    console.log(" to " + num2);
  };

  const handle2Increment = (incrementAmt: number) => {
    setNum2(num2 + incrementAmt);
  };

  const handleCombine = () => {
    setTotal(num1 + num2);
  };

  return (
    <>
      <h2 className="display-5 text-center mb-4">Number Game</h2>
      <div className="d-flex justify-content-around">
        <Counter
          header="Starting Number"
          incrementAmt={10}
          onIncrement={handle1Increment}
        />
        <Counter
          header="Number to Combine"
          incrementAmt={-5}
          onIncrement={handle2Increment}
        />
        <Combiner num1={num1} num2={num2} onCombine={handleCombine} />
      </div>
    </>
  );
};

export default NumberGame;
