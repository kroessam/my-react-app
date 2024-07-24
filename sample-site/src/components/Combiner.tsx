import { useState } from "react";
import Counter from "./Counter";

const Combiner = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  const handle1Increment = (incrementAmt: number) => {
    setNum1(num1 + incrementAmt);
  };

  const handle2Increment = (incrementAmt: number) => {
    setNum2(num2 + incrementAmt);
  };

  return (
    <div className="d-flex justify-content-around">
      <Counter header="Starting Number" incrementAmt={10} onIncrement={handle1Increment}/>
      <Counter header="Number to Combine" incrementAmt={-5} onIncrement={handle2Increment}/>
      <div className="w-25 d-flex flex-column align-items-center">
        <h3>Total</h3>
        <p>{total !== 0 ? total : "-"}</p>
        <button className="btn btn-outline-dark">Combine</button>
      </div>
    </div>
  );
};

export default Combiner;
