import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://644aa956a8370fb3215512de.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/users?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeFollowers = createAsyncThunk(
  'users/changeFollowers',
  async ({ id, followers }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/users/${id}`, { followers });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
