"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import { useEffect } from "react";
import { setBookmarks } from "../store/bookmarksSlice";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const saved = localStorage.getItem('bookmarks');
    if(saved){
      store.dispatch(setBookmarks(JSON.parse(saved)));
    }
  }, [])
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      localStorage.setItem(
        "bookmarks",
        JSON.stringify(state.bookmarks.users)
      );
    });

    return () => unsubscribe();
  }, []);
  return <Provider store={store}>{children}</Provider>;
};
