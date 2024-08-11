import "./index.css";

const UserItem = (props) => {
  const { user, onBanUser } = props;
  const { username, firstName, lastName, id, banned, email } = user;
  const status = banned ? "user banned" : "user";
  const buttonText = banned ? "enable" : "ban";
  const textStyle = banned ? "banned-text" : "";

  const onClickBan = () => {
    onBanUser(id);
  };
  return (
    <li className={status}>
      <p className={`${textStyle} id-row-cell`}>{id}</p>
      <p className={`${textStyle} row-cell-username`}>{username}</p>
      <p className={`${textStyle} row-cell-name`}>
        {firstName + " " + lastName}
      </p>
      <p className={`${textStyle} row-cell-email`}>{email}</p>
      <div className="row-cell-options">
        <button className="button" onClick={onClickBan} type="button">
          {buttonText}
        </button>
        {banned !== true && (
          <button className="button" type="button">
            edit
          </button>
        )}
      </div>
    </li>
  );
};

export default UserItem;
