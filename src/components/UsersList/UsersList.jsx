import TweetCard from 'components/TweetCard/TweetCard';
import { List } from './UsersList.styled';

export const UsersList = ({ users }) => {
  console.log(users);
  return (
    <List>
      {users.map(user => {
        return (
          <li key={user.id}>
            <TweetCard userTweets={user} />
          </li>
        );
      })}
    </List>
  );
};
