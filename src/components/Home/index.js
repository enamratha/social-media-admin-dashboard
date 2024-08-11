import Navbar from "../Navbar";
import TotalUsersKpi from "../TotalUsersKpi";
import TotalPostsKpi from "../TotalPostsKpi";
import { FaAngleDoubleRight } from "react-icons/fa";

import "./index.css";

const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="home-container">
        <div className="home-heading">
          <h3>Home</h3>
          <FaAngleDoubleRight className="home-icon" />
        </div>
        <div className="kpi-container">
          <TotalUsersKpi />
          <TotalPostsKpi />
        </div>
      </div>
    </div>
  );
};

export default Home;
