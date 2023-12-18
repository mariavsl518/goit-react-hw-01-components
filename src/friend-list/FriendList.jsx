import React from 'react'
import './FriendList.css'

const FriendList = ({friends}) => 
{
  return (
    <ul className="friend-list">
    {friends.map(friend =>
    <FriendListItem friend={friend}/>)
    }
    </ul>
  )
}

export const FriendListItem = ({friend}) => {
  return (
        <li className="friend-item" key={friend.id}>
            <span className='status' style={{backgroundColor:friend.isOnline ? 'green ': 'red'}}></span>
            <img className="friend-avatar" src={friend.avatar} alt="User avatar" width="48px" />
            <p className="name">{friend.name}</p>
        </li> 
        )
}


export {FriendList}