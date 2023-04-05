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

const initialState = {
  books: [],
  isLoading: false,
  error: '',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        name: payload.name,
        author: payload.author,
        id: payload.id,
      });
    },
    removeBook: (state, { payload }) => {
      state.books.filter((book) => book.id !== payload.id);
    },
  },
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
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
