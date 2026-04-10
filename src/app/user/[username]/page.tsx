"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getUser, getUserRepos } from "@/src/lib/github";
import { GitHubUserDetails, Repo } from "@/src/types/github";
import UserHeader from "@/src/components/user/UserHeader";
import RepoList from "@/src/components/user/RepoList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { addBookmark, removeBookmark } from "@/src/store/bookmarksSlice";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner";

export default function UserPage() {
  const { username } = useParams() as { username: string }; 

  const dispatch = useDispatch();
   const bookmarks = useSelector((state: RootState) => state.bookmarks.users);

  const [user, setUser] = useState<GitHubUserDetails | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)

  const isBookmarked = bookmarks.some(
    (b) => b.login === username
  );

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getUser(username);
        setUser(userData);
      } catch {
        toast.error("Failed to fetch user");
      }
    }
    fetchUser();
  }, [username]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const repoData = await getUserRepos(username, page);  // Pagination fetch repo page by page instead at once

        setRepos((prev) =>
          page === 1 ? repoData : [...prev, ...repoData]
        );
      } catch {
        toast.error("Failed to fetch repos");
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username, page]);

  if (loading) {
    return <p className="text-center mt-10 animate-pulse">Loading profile...</p>;
  }

  if (!user) {  
    return <p className="text-center mt-10">User not found</p>;
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      <UserHeader user={user} />
      <Button
        className="w-full"
        variant={isBookmarked ? "destructive" : "default"}
        onClick={() => {
            if (!user) return;

            if (isBookmarked) {
            dispatch(removeBookmark(user.login));
            toast.success("Removed from bookmarks");
            } else {
            dispatch(
                addBookmark({
                login: user.login,
                avatar_url: user.avatar_url,
                })
            );
            toast.success("Added to bookmarks");
            }
        }}
        >{isBookmarked ? "❌ Remove Bookmark" : "⭐ Bookmark User"}</Button>
        
      <RepoList repos={repos} />
      <Button
        onClick={() => setPage((p) => p + 1)}
        className="mt-4 px-4 py-2 border rounded"
      >
        Load More
      </Button>
    </main>
  );
}