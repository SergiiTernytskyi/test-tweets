const {
  Line,
  AvatarImage,
  Avatar,
  AvatarThumb,
} = require('./UserAvatar.styled');

const UserAvatar = ({ avatar }) => {
  return (
    <Avatar>
      <Line />
      <AvatarThumb>
        <AvatarImage src={avatar} alt="user avatar" />
      </AvatarThumb>
    </Avatar>
  );
};

export default UserAvatar;
