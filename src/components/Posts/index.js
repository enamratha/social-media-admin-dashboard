import { Component } from "react";
import Loader from "react-loader-spinner";
import PostItem from "../PostItem";
import Navbar from "../Navbar";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import "./index.css";

const apiStatus = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
};

class Posts extends Component {
  state = {
    data: [],
    offset: 0,
    limit: 10,
    status: apiStatus.initial,
  };

  componentDidMount() {
    this.getPostDetails();
  }

  getPostDetails = async () => {
    this.setState({ status: apiStatus.loading });
    const { offset, limit } = this.state;
    const url = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      status: apiStatus.success,
      data: data.photos,
      totalItems: data.total_photos,
    });
  };

  onClickBack = () => {
    this.setState(
      (prevState) => ({
        offset: prevState.offset - 10,
      }),
      this.getPostDetails
    );
  };

  onClickNext = () => {
    this.setState(
      (prevState) => ({
        offset: prevState.offset + 10,
      }),
      this.getPostDetails
    );
  };

  deletePost = (id) => {
    const { data } = this.state;
    const updatedData = data.map((post) => {
      if (post.id === id) {
        return { ...post, isDeleted: true };
      }
      return post;
    });
    this.setState({ data: updatedData });
  };

  hidePost = (id) => {
    const { data } = this.state;
    const updatedData = data.map((post) => {
      if (post.id === id) {
        return { ...post, displayStatus: false };
      }
      return post;
    });
    this.setState({ data: updatedData });
  };

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="black" height={80} width={80} />
    </div>
  );

  renderPosts = () => {
    const { data, offset, totalItems } = this.state;
    return (
      <div className="posts-container">
        <ul>
          <li className="table-heading">
            <h2 className="post-id">Post id</h2>
            <h2 className="post-comment">Caption</h2>
            <h2 className="post-img">Media</h2>
            <h2 className="post-options">Options</h2>
          </li>
          {data.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              deletePost={this.deletePost}
              hidePost={this.hidePost}
            />
          ))}
        </ul>
        <div className="next-back-container">
          {offset > 0 && (
            <button
              className="next-back-buttons "
              onClick={this.onClickBack}
              type="button"
            >
              <MdNavigateBefore className="next-back-icon" />
              <p>Back</p>
            </button>
          )}
          {offset + 10 < totalItems && (
            <button
              className="next-back-buttons next"
              onClick={this.onClickNext}
              type="button"
            >
              <p>Next</p>
              <span>
                <MdNavigateNext className="next-back-icon" />
              </span>
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
        return this.renderPosts();
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="main-container">
        <Navbar />
        {this.renderResults()}
      </div>
    );
  }
}

export default Posts;
