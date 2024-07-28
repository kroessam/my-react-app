import { useState } from "react";
import { Link } from "react-router-dom";

const URLSearch = () => {
  const [input, setInput] = useState("");

  return (
    <div className="text-center">
      <h3 className="mb-4">Test This App's Routing</h3>
      <p>Enter a path to try, then press "go"! (Leave blank to go home)</p>
      <div className="input-group w-25 mx-auto mb-2">
        <span className="input-group-text">/</span>
        <input
          className="form-control w-25 mx-auto"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <p>
        Going to:{" "}
        <span className="text-success">
          {input === "" ? "Home Page" : "/" + input}
        </span>
      </p>
      <Link className="btn btn-primary" to={input}>
        Go
      </Link>
    </div>
  );
};

export default URLSearch;
