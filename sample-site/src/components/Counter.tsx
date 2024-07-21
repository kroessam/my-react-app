import { useState } from "react";

interface Props {
  header?: string;
  amt?: number;
}

const Counter = ({header = "Counter", amt = 0}: Props) => {
  const [count, setCount] = useState(0);
  let btnText = amt >= 0 && "+";

  return (
    <div className="w-25 d-flex flex-column align-items-center">
      <h3>{header}</h3>
      <p>{count}</p>
      <button
        className="btn btn-outline-dark"
        onClick={() => setCount(count + amt)}
      >
        {btnText}{amt}
      </button>
    </div>
  );
};

export default Counter;
