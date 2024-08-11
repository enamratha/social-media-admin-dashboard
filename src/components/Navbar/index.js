import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { IoIosLogOut } from "react-icons/io";

import "./index.css";

const Navbar = (props) => {
  const onLogOut = () => {
    Cookies.remove("jwt_token");
    const { history } = props;
    history.replace("/login");
  };

  return (
    <nav className="nav-container">
      <h1>Admin Dashboard</h1>
      <Link className="link-item" to="/">
        <p className="nav-item">Home</p>
      </Link>
      <Link className="link-item" to="/users">
        <p className="nav-item">Users data</p>
      </Link>
      <Link className="link-item" to="/posts">
        <p className="nav-item">All posts</p>
      </Link>
      <button className="button" onClick={onLogOut} type="button">
        <span>Log out</span>
        <IoIosLogOut className="icon" />
      </button>
    </nav>
  );
};

export default withRouter(Navbar);
