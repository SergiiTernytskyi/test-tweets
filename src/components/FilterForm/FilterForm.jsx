import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/slice';

import { Select, SelectWrapper } from './FilterForm.styled';

const FilterForm = () => {
  const dispatch = useDispatch();

  const selectHandler = value => dispatch(setFilter(value));

  useEffect(() => {
    return () => {
      dispatch(setFilter('all'));
    };
  }, [dispatch]);

  return (
    <SelectWrapper>
      <Select
        id="select"
        name="tweetsForm"
        onChange={event => selectHandler(event.target.value)}
      >
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </Select>
    </SelectWrapper>
  );
};

export default FilterForm;
