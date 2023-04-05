import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const app = '26VQCgZeIQMuYz9e44m4';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${app}/books`;

export const fetchData = createAsyncThunk(
  'books/fetchData',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const postBook = createAsyncThunk(
  'post/postBook',
  async (data) => {
    const response = await axios.post(url, data);
    return response.data;
  },
);

export const deleteBook = createAsyncThunk(
  'delete/deleteBook',
  async (data) => {
    const itemToDelete = `${url}/${data}`;
    const response = await axios.delete(itemToDelete);
    return response.data;
  },
);

const initialState = {
  books: [],
  isLoading: false,
  error: '',
  postMsg: '',
  counter: 0,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchData.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      books: action.payload,
    }));
    builder.addCase(fetchData.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));
    builder.addCase(postBook.fulfilled, (state, action) => ({
      ...state,
      postMsg: action.payload,
      counter: state.counter + 1,
    }));
    builder.addCase(deleteBook.fulfilled, (state) => ({
      ...state,
      counter: state.counter - 1,
    }
    ));
  },
});

export default booksSlice.reducer;
