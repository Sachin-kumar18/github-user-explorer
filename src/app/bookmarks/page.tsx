"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import BookmarkList from "@/src/components/bookmarks/BookmarkList";
import EmptyState from "@/src/components/bookmarks/EmptyState";

export default function BookmarksPage() {
  const bookmarks = useSelector(
    (state: RootState) => state.bookmarks.users
  );

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold text-center">
        Bookmarked Users
      </h1>

      {bookmarks.length === 0 ? (
        <EmptyState />
      ) : (
        <BookmarkList />
      )}
    </main>
  );
}