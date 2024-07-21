import { useState } from "react";

const Combiner = () => {
  const [total, setTotal] = useState(0);

  return (
    <div className="w-25 d-flex flex-column align-items-center">
      <h3>Total</h3>
      <p>{total !== 0 ? total : "-"}</p>
      <button className="btn btn-outline-dark">Combine</button>
    </div>
  );
};

export default Combiner;
