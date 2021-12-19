import style from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({friends}) {
  return (
    <div className={style.container}>
      <ul className={style.friendList}>
        {friends.map(({avatar, name, isOnline, id}) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        ))}
      </ul>
    </div>
  )
}

export default FriendList;