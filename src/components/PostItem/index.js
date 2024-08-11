import { BsEyeSlashFill } from "react-icons/bs";

import "./index.css";

const PostItem = (props) => {
  const { post, deletePost, hidePost } = props;
  const { url, description, id, isDeleted, displayStatus } = post;
  const onClickDelete = () => {
    deletePost(id);
  };
  const onClickHide = () => {
    hidePost(id);
  };

  const style = isDeleted ? "post-item-cell deleted" : "post-item-cell";

  return (
    <li className={style}>
      {displayStatus !== false ? (
        <>
          <p className="post-id">{id}</p>
          <p className="post-comment">{description}</p>
          <p className="post-img">{url}</p>
          <div className="post-options">
            {isDeleted ? (
              <p>deleted</p>
            ) : (
              <div className="row-cell-options">
                <button
                  className="button"
                  onClick={onClickDelete}
                  type="button"
                >
                  delete
                </button>
                <button className="button" onClick={onClickHide} type="button">
                  hide
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="hidden-container">
          <p>hidden</p>
          <BsEyeSlashFill className="icon" />
        </div>
      )}
    </li>
  );
};

export default PostItem;
