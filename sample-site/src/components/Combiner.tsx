import { useState } from "react";
import Counter from "./Counter";

const Combiner = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  const handle1Increment = (prevCount: number, incrementAmt: number) => {
    setNum1(prevCount + incrementAmt);
  };

  const handle2Increment = (prevCount: number, incrementAmt: number) => {
    setNum2(prevCount + incrementAmt);
  };

  return (
    <div className="border border-primary rounded-4 p-4">
      <h2 className="display-5 text-center mb-4 text-primary">Number Game</h2>
      <button
        className="btn btn-primary d-block mx-auto mb-3"
        onClick={() => {
          console.log(num1, num2, total);
        }}
      >
        Log Current Values
      </button>
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
        <div className="w-25 d-flex flex-column align-items-center">
          <h3>Total</h3>
          <p className="fs-2">{total}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              setTotal(num1 + num2);
            }}
          >
            Combine
          </button>
        </div>
      </div>
    </div>
  );
};

export default Combiner;
