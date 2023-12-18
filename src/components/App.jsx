import { Statistics } from "../statistics/Stasistics";
import { Profile } from "../profile/Profile";
import { FriendList } from "friend-list/FriendList";
import { TransactionHistory } from '../transactions/Transactions.jsx';
import data from '../statistics/data.json';
import user from '../profile/user.json';
import friends from '../friend-list/friends.json';
import transactions from '../transactions/transactions.json'

export const App = () => {
  return (
    <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/>
    </>
  );
};
