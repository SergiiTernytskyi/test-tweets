import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from 'redux/constants';
import { selectUsers } from 'redux/users/slectors';

export const selectFilter = state => state.filter.status;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return users.filter(user => !user.follow);
      case statusFilters.followings:
        return users.filter(user => user.follow);
      default:
        return users;
    }
  }
);
