import { useState } from "react";

interface Props {
  amt?: number;
}

const Counter = ({amt = 0}: Props) => {
  const [count, setCount] = useState(0);
  let btnText = amt >= 0 && "+";

  return (
    <div className="w-25 bg-primary d-flex flex-column align-items-center">
      <h2>Counter</h2>
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
