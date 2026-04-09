import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GitHubUser } from "../types/github";

interface BookmarksState {
  users: GitHubUser[];
}

const initialState: BookmarksState = {
  users: [],
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setBookmarks(state, action: PayloadAction<GitHubUser[]>) {
      state.users = action.payload;
    },
    addBookmark(state, action: PayloadAction<GitHubUser>) {
      const exists = state.users.find(
        (user) => user.login === action.payload.login
      );
      if (!exists) {
        state.users.push(action.payload);
      }
    },
    removeBookmark(state, action: PayloadAction<string>) {
      state.users = state.users.filter(
        (user) => user.login !== action.payload
      );
    },
  },
});

export const { setBookmarks, addBookmark, removeBookmark } =
  bookmarksSlice.actions;

export default bookmarksSlice.reducer;