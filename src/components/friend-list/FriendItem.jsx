import css from './FriendItem.module.css'

export const FriendListItem = ({friend}) => {
    return (
          <li className={css.item} key={friend.id}>
              <span className={css.status} style={{backgroundColor:friend.isOnline ? 'green ': 'red'}}></span>
              <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48px" />
              <p className={css.name}>{friend.name}</p>
          </li> 
          )
  }