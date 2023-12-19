import { Statistics } from "./statistics/Stasistics";
import { Profile } from "./profile/Profile";
import { FriendList } from "components/friend-list/FriendList";
import { TransactionHistory } from './transactions/Transactions.jsx';
import data from '../ data/data.json';
import user from '../ data/user.json';
import friends from '../ data/friends.json';
import transactions from '../ data/transactions.json'

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
