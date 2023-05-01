import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from 'redux/constants';
import { selectUsers, selectFollow } from 'redux/users/slectors';

export const selectFilter = state => state.filter.status;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter, selectFollow],
  (users, statusFilter, follow) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return users.filter(user => !follow.includes(user.id));
      case statusFilters.followings:
        return users.filter(user => follow.includes(user.id));
      default:
        return users;
    }
  }
);
