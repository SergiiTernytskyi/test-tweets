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
  state.users.push(...action.payload);
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
