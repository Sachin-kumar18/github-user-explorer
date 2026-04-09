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

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const [userData, repoData] = await Promise.all([
          getUser(username),
          getUserRepos(username),
        ]);

        setUser(userData);
        setRepos(repoData);
      } catch (error) {
        toast.error("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!user) {
    return <p className="text-center mt-10">User not found</p>;
  }

    const isBookmarked = bookmarks.some(
    (b) => b.login === username
    );

  return (
    <main className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      <UserHeader user={user} />
      <Button
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
        ></Button>
        
      <RepoList repos={repos} />
    </main>
  );
}