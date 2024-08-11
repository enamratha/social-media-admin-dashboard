import { Link } from "react-router-dom";
import "./index.css";

const NotFound = () => (
  <div className="not-found">
    <h1>Oops! Not Found</h1>
    <p>You can find a lot on Home Page</p>
    <Link to="/">
      <p>Navigate to home page</p>
    </Link>
  </div>
);

export default NotFound;
