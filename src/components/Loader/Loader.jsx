import { LoaderWrapper } from './Loader.styled';

const { CircleLoader } = require('react-spinners');

const Loader = () => {
  return (
    <LoaderWrapper>
      <CircleLoader color="#471CA9" loading size={80} speedMultiplier={2} />
    </LoaderWrapper>
  );
};

export default Loader;
