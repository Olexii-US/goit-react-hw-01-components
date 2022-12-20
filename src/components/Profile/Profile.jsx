import PropTypes from "prop-types";
import css from "./Profile.module.css";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={`${username} avatar`}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>{Object.keys(stats)[0]}</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>{Object.keys(stats)[1]}</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>{Object.keys(stats)[2]}</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired
}

