import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="display-1">404</h1>
      <p className="lead">Error: Page Not Found</p>
      <Link className="btn btn-outline-dark" to="/">Back to Home</Link>
    </div>
  );
};
