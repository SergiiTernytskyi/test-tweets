import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from 'redux/users/operations';
import { selectError, selectIsLoading } from 'redux/users/slectors';

import BackLink from 'components/BackLink/BackLink';
import UsersList from 'components/UsersList/UsersList';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import FilterForm from 'components/FilterForm/FilterForm';

const PAGE_LIMIT = 3;

const Tweets = () => {
  const [page, setPage] = useState(parseInt(localStorage.getItem('page')) || 1);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page, limit: PAGE_LIMIT }));
  }, [dispatch, page]);

  const loadMoreHandler = () => {
    setPage(prevState => prevState + 1);
    localStorage.setItem('page', JSON.stringify(page + 1));
  };

  return (
    <main>
      <BackLink>Go back</BackLink>
      <FilterForm />
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
