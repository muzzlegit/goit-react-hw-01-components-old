import style from './FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({avatar, name, isOnline}) {
  return (
    <li
      className={style.item}      
      style={isOnline ?
        { boxShadow: '-2px 0px 7px -2px #00ff00, 2px 0px 7px -2px #00ff00, 2px 5px 3px 1px rgba(0,255,0,0)' }:
        {
          boxShadow: '-2px 0px 7px -2px #ff0000, 2px 0px 7px -2px #ff0000, 2px 5px 3px 1px rgba(255,0,0,0)'
        }}
    >

      <img
        className={style.avatar}
        src={avatar}
        alt={name}
        width="48" />
      <p className={style.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {

  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;