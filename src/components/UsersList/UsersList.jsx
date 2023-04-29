import TweetCard from 'components/TweetCard/TweetCard';
import { List } from './UsersList.styled';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/slectors';

export const UsersList = () => {
  const users = useSelector(selectUsers);

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
