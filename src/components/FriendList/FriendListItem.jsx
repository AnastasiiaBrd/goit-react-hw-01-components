import propTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  // const userIsOnline =
  // userStatus === true ? styles.onlineTrue : styles.onlineFalse;
  return (
    <li className="item-friends">
      <span className={isOnline === true ? "onlineTrue" : "onlineFalse"}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
