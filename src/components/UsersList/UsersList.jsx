import { useSelector } from 'react-redux';

import { selectFilteredUsers } from 'redux/filter/selectors';

import TweetCard from 'components/TweetCard/TweetCard';

import { List } from './UsersList.styled';

const UsersList = () => {
  const filteredUsers = useSelector(selectFilteredUsers);

  return (
    <List>
      {filteredUsers.map(user => {
        return (
          <li key={user.id}>
            <TweetCard userTweets={user} />
          </li>
        );
      })}
    </List>
  );
};

export default UsersList;
