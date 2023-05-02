import { useDispatch, useSelector } from 'react-redux';

import { numberConvert } from 'services/numberConvert';
import { changeFollowers } from 'redux/users/operations';
import { selectFollow } from 'redux/users/slectors';

import FollowButton from 'components/FollowButton/FollowButton';
import UserAvatar from 'components/UserAvatar/UserAvatar';

import heroPicture from 'images/heroPicture.png';
import logo from 'images/logo.svg';

import {
  Card,
  HeroPicture,
  Info,
  Logo,
  Text,
  Wrapper,
} from './TweetCard.styled';

const TweetCard = ({ userTweets }) => {
  const { id, followers, tweets, avatar } = userTweets;

  const follow = useSelector(selectFollow);

  const dispatch = useDispatch();

  const isFollow = id => {
    return follow.includes(id);
  };

  const followersToggle = userId => {
    const changedFollow = follow.includes(userId)
      ? followers - 1
      : followers + 1;

    dispatch(changeFollowers({ id: userId, followers: changedFollow }));
  };

  return (
    <Card>
      <Logo src={logo} alt="company logo" />
      <HeroPicture src={heroPicture} alt="main" />

      <UserAvatar avatar={avatar} />

      <Wrapper>
        <Info>
          <Text>{numberConvert(tweets)} Tweets</Text>
          <Text>{numberConvert(followers)} Followers</Text>
        </Info>

        <FollowButton
          onClick={() => followersToggle(id)}
          follow={isFollow(id)}
        />
      </Wrapper>
    </Card>
  );
};

export default TweetCard;
