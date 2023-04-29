import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from 'redux/users/operations';
import { selectError, selectIsLoading } from 'redux/users/slectors';
import { resetUsers } from 'redux/users/slice';

import BackLink from 'components/BackLink/BackLink';
import UsersList from 'components/UsersList/UsersList';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

const PAGE_LIMIT = 3;

const Tweets = () => {
  const [page, setPage] = useState(1);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    dispatch(fetchUsers({ page, limit: PAGE_LIMIT }));
    scrollToBottom();
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(resetUsers());
    };
  }, [dispatch]);

  const loadMoreHandler = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <main>
      <BackLink>Go back</BackLink>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!error && isLoading && <Loader />}
      {!error && !isLoading && <UsersList />}
      {!error && !isLoading && (
        <Button onClick={loadMoreHandler}>Load More</Button>
      )}
    </main>
  );
};

export default Tweets;
