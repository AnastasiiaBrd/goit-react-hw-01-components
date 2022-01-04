import react from "react";
import propTypes from "prop-types";
import photo from "../../photo/photo.jpg";
import styles from "./Profile.module.css";

const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props.data;
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar ? avatar : photo}
          alt="User avatar"
          className="avatar"
          width="200"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  data: propTypes.shape({
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
      followers: propTypes.number,
      views: propTypes.number,
      likes: propTypes.number,
    }),
  }),
};
