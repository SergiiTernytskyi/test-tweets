import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://644aa956a8370fb3215512de.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/users?page=${page}&limit=${limit}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFollowing = createAsyncThunk(
  'users/toggleFollowing',
  async ({ followers }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/userId`, { followers });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
