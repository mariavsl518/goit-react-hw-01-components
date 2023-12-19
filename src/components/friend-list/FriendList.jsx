import React from 'react'
import css from './FriendList.module.css'
import { FriendListItem } from './FriendItem'

const FriendList = ({friends}) => 
{
  return (
    <ul className={css.friendList}>
    {friends.map(friend =>
    <FriendListItem friend={friend}/>)
    }
    </ul>
  )
}


export {FriendList}