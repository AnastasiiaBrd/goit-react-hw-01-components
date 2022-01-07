import react from "react";
import propTypes from "prop-types";
import photo from "../../photo/photo.jpg";
import styles from "./Profile.module.css";

const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props.data;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar ? avatar : photo}
          alt="User avatar"
          className={styles.avatar}
          width="200"
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
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
