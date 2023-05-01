import { useDispatch, useSelector } from 'react-redux';

import { numberConvert } from 'services/numberConvert';
import { toggleFollowing } from 'redux/users/slice';
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

  const followersToggle = () => {
    dispatch(toggleFollowing(id));
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

        <FollowButton onClick={followersToggle} follow={isFollow(id)} />
      </Wrapper>
    </Card>
  );
};

export default TweetCard;
