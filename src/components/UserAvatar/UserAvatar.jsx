import noAvatar from 'images/Hansel.jpg';

const { AvatarImage, Avatar, AvatarThumb } = require('./UserAvatar.styled');

const UserAvatar = ({ avatar }) => {
  return (
    <Avatar>
      <AvatarThumb>
        <AvatarImage src={avatar ? avatar : noAvatar} alt="user avatar" />
      </AvatarThumb>
    </Avatar>
  );
};

export default UserAvatar;
