import { useDispatch } from 'react-redux';

import { numberConvert } from 'services/numberConvert';
import { toggleFollowing } from 'redux/users/slice';

import FollowButton from 'components/FollowButton/FollowButton';

import UserAvatar from 'components/UserAvatar/UserAvatar';
import heroPicture from 'images/heroPicture.png';
import logo from 'images/Logo.svg';

import {
  Card,
  HeroPicture,
  Info,
  Logo,
  Text,
  Wrapper,
} from './TweetCard.styled';

const TweetCard = ({ userTweets }) => {
  const { id, followers, tweets, avatar, follow = false } = userTweets;

  const dispatch = useDispatch();

  const followersToggle = () => {
    dispatch(
      toggleFollowing({
        userId: id,
        followers: follow ? followers - 1 : followers + 1,
      })
    );
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

        <FollowButton onClick={followersToggle} activeFollow={follow} />
      </Wrapper>
    </Card>
  );
};

export default TweetCard;
