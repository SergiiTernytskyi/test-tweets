const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { fetchUsers } = require('./operations');

const initialState = {
  users: [],
  follow: [],
  isLoading: false,
  error: null,
};

const extraActions = [fetchUsers];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchUsersFulfilledReducer = (state, action) => {
  const newUsers = action.payload.filter(
    item => !state.users.some(existingItem => existingItem.id === item.id)
  );
  state.users = [...state.users, ...newUsers];
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

const toggleFollowingReducer = (state, action) => {
  if (!state.follow.includes(action.payload)) {
    state.follow.push(action.payload);
    for (const user of state.users) {
      if (user.id === action.payload) {
        user.followers = user.followers + 1;
        break;
      }
    }
  } else {
    const index = state.follow.findIndex(value => value === action.payload);
    state.follow.splice(index, 1);
    for (const user of state.users) {
      if (user.id === action.payload) {
        user.followers = user.followers - 1;
        break;
      }
    }
  }
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUsers: resetUsersReducer,
    toggleFollowing: toggleFollowingReducer,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, fetchUsersFulfilledReducer)
      .addMatcher(getActions('pending'), contactsAnyPendingReducer)
      .addMatcher(getActions('rejected'), contactsAnyRejectedReducer)
      .addMatcher(getActions('fulfilled'), contactsAnyFulfilledReducer),
});

export const usersReducer = usersSlice.reducer;
export const { resetUsers, toggleFollowing } = usersSlice.actions;
