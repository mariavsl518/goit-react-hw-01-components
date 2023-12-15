import { Statistics } from "../statistics/Stasistics";
import { Profile } from "../user-profile/Profile";
// import data from '../statistics/data.json';
import user from '../user.json';

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
    <Statistics/>
    </>
  );
};
