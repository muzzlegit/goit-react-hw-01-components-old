import style from './UserProfile.module.css';
import PropTypes from 'prop-types';

function UserProfile({ src, alt, name, tag, location, stats }) {
  return (
    <div className ={style.container}>
      <div className={style.profile}>
        <div className={style.description}>
          <img
            src={src}
            alt={alt}
            className={style.avatar}
            />
            <p className={style.name}>{name}</p>
            <p className={style.tag}>@{tag}</p>
            <p className={style.location}>{location}</p>
        </div>
        <ul className={style.stats}>
          <li className={style.item}>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{stats.followers}</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{stats.views}</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

UserProfile.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default UserProfile;