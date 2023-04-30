const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { fetchUsers } = require('./operations');

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const extraActions = [fetchUsers];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchUsersFulfilledReducer = (state, action) => {
  const result = action.payload.map(el => ({
    ...el,
    follow: false,
  }));

  const newUsers = result.filter(
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

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUsers: state => {
      state.users = [];
    },
    toggleFollowing: (state, action) => {
      for (const user of state.users) {
        if (user.id === action.payload.userId) {
          user.followers = action.payload.followers;
          user.follow = !user.follow;
          break;
        }
      }
    },
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
