import { useState } from "react";

interface Props {
  header?: string;
  incrementAmt?: number;
  onIncrement: (incrementAmt: number) => void;
}

const Counter = ({
  header = "Counter",
  incrementAmt = 0,
  onIncrement,
}: Props) => {
  const [count, setCount] = useState(0); // track counter's value
  let btnText = incrementAmt >= 0 && "+"; // Add  the plus sign (+) if positive

  return (
    <div className="w-25 d-flex flex-column align-items-center">
      <h3>{header}</h3>
      <p className="fs-2">{count}</p>
      <button
        className="btn btn-outline-dark"
        onClick={() => {
          setCount(count + incrementAmt);
          onIncrement(count);
        }}
      >
        {btnText}
        {incrementAmt}
      </button>
    </div>
  );
};

export default Counter;
