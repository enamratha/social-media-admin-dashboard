import { Component } from "react";
import Loader from "react-loader-spinner";
import "./index.css";
import UserItem from "../UserItem";
import Navbar from "../Navbar";
import KpiContext from "../../contexts/KpiContext";

const apiStatus = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
};

class Users extends Component {
  state = {
    users: [],
    limit: 10,
    offset: 0,
    status: apiStatus.initial,
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    this.setState({ status: apiStatus.loading });
    const { limit, offset } = this.state;
    const url = `https://dummyjson.com/users?limit=${limit}&skip=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ users: data.users, status: apiStatus.success });
  };

  onBanUser = (id) => {
    const { users } = this.state;
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, banned: !user.banned };
      }
      return user;
    });
    this.setState({ users: updatedUsers });
  };

  onClickNext = () => {
    this.setState(
      (prevState) => ({
        offset: prevState.offset + 10,
      }),
      this.getUsers
    );
  };

  onClickBack = () => {
    this.setState(
      (prevState) => ({
        offset: prevState.offset - 10,
      }),
      this.getUsers
    );
  };

  renderLoader = () => (
    <div className="loader">
      <Loader type="ThreeDots" color="black" height={80} width={80} />
    </div>
  );

  renderUserList = () => {
    const { users, offset } = this.state;
    return (
      <div>
        <ul className="user-table">
          <li className="table-heading">
            <h2 className="id-row-cell">User id</h2>
            <h2 className="row-cell-username">User name</h2>
            <h2 className="row-cell-name">Name</h2>
            <h2 className="row-cell-email">email</h2>
            <h2 className="row-cell-options">options</h2>
          </li>
          {users.map((user) => (
            <UserItem key={user.id} user={user} onBanUser={this.onBanUser} />
          ))}
        </ul>
        <div className="next-back-container">
          {offset > 0 && (
            <button
              className="next-back-buttons"
              onClick={this.onClickBack}
              type="button"
            >
              Back
            </button>
          )}
          {offset + 10 < 208 && (
            <button
              className="next-back-buttons next"
              onClick={this.onClickNext}
              type="button"
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  };

  renderResults = () => {
    const { status } = this.state;
    switch (status) {
      case apiStatus.loading:
        return this.renderLoader();
      case apiStatus.success:
        return this.renderUserList();
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <div className="main-container">
          <Navbar />
          <div className="user-content">
            <KpiContext.Consumer>
              {(value) => {
                const { totalUsers, activeUsers } = value;
                return (
                  <div className="user-page-kpi-container">
                    <div className="mini-kpi">
                      <p>Total Users</p>
                      <h1>{totalUsers}</h1>
                    </div>
                    <div className="mini-kpi">
                      <p>Active Users</p>
                      <h1>{activeUsers}</h1>
                    </div>
                  </div>
                );
              }}
            </KpiContext.Consumer>
            <div className="second-section">{this.renderResults()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;