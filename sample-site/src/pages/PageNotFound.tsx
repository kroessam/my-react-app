import { Link } from "react-router-dom";
import URLSearch from "../components/URLSearch";

export const PageNotFound = () => {
  return (
    <div>
      <div className="text-center my-5">
      <h1 className="display-1">404</h1>
      <p className="lead">Error: Page Not Found</p>
      <Link className="btn btn-outline-dark" to="/">
        Back to Home
      </Link>
      </div>
      <hr className="mb-5"/>
      <URLSearch />
    </div>
  );
};
