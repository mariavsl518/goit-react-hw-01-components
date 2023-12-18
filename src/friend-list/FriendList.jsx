import React from 'react'
import './FriendList.css'

const FriendList = ({friends}) => 
{
  return (
    <ul className="friend-list">
    {friends.map( ({avatar, name, isOnline=false, id}) =>
        (
        <li className="friend-item" key={id}>
            <span className='status' style={{backgroundColor:isOnline ? 'green ': 'red'}}></span>
            <img className="friend-avatar" src={avatar} alt="User avatar" width="48px" />
            <p className="name">{name}</p>
        </li> 
        )
    )}
    </ul>
  )
}

export {FriendList}