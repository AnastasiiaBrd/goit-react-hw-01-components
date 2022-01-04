import FriendListItem from "./FriendListItem";
import propTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
};

export default FriendList;
