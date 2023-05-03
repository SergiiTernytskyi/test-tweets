const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { fetchUsers, changeFollowers } = require('./operations');

const initialState = {
  users: [],
  follow: [],
  isLoading: false,
  error: null,
};

const extraActions = [fetchUsers, changeFollowers];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchUsersFulfilledReducer = (state, action) => {
  const newUsers = action.payload.filter(
    item => !state.users.some(existingItem => existingItem.id === item.id)
  );
  state.users = [...state.users, ...newUsers];
};

const changeFollowersFulfieldReducer = (state, action) => {
  const index = state.users.findIndex(user => user.id === action.payload.id);
  state.users.splice(index, 1, {
    ...action.payload,
  });

  if (!state.follow.includes(action.payload.id)) {
    state.follow.push(action.payload.id);
  } else {
    const index = state.follow.findIndex(value => value === action.payload.id);
    state.follow.splice(index, 1);
  }
};

const contactsAnyPendingReducer = state => {
  state.isLoading = true;
};

const contactsAnyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsAnyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const resetUsersReducer = state => {
  state.users = [];
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUsers: resetUsersReducer,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, fetchUsersFulfilledReducer)
      .addCase(changeFollowers.fulfilled, changeFollowersFulfieldReducer)
      .addMatcher(getActions('pending'), contactsAnyPendingReducer)
      .addMatcher(getActions('rejected'), contactsAnyRejectedReducer)
      .addMatcher(getActions('fulfilled'), contactsAnyFulfilledReducer),
});

export const usersReducer = usersSlice.reducer;
export const { resetUsers } = usersSlice.actions;
