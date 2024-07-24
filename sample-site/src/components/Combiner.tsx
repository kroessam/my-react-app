import { useState } from "react";

interface Props {
  num1: number;
  num2: number;
  onCombine: () => void;
}

const Combiner = ({ num1, num2, onCombine }: Props) => {
  const [total, setTotal] = useState(0);
  return (
    <div className="w-25 d-flex flex-column align-items-center">
      <h3>Total</h3>
      <p className="fs-2">{total !== 0 ? total : "-"}</p>
      <button
        className="btn btn-outline-dark"
        onClick={() => {
          onCombine;
          console.log(num1 + num2);
        }}
      >
        Combine
      </button>
    </div>
  );
};

export default Combiner;
