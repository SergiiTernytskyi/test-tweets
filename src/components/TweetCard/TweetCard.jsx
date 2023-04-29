import { useState } from 'react';
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
  const { id, followers, tweets, avatar } = userTweets;

  const [activeFollow, setActiveFollow] = useState(false);

  const dispatch = useDispatch();

  const followersToggle = () => {
    if (activeFollow) {
      setActiveFollow(false);
    } else {
      setActiveFollow(true);
    }

    dispatch(
      toggleFollowing({
        userId: id,
        followers: activeFollow ? followers - 1 : followers + 1,
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

        <FollowButton onClick={followersToggle} activeFollow={activeFollow} />
      </Wrapper>
    </Card>
  );
};

export default TweetCard;
