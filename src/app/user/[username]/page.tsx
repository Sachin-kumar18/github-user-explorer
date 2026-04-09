"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getUser, getUserRepos } from "@/src/lib/github";
import { GitHubUserDetails, Repo } from "@/src/types/github";
import UserHeader from "@/src/components/user/UserHeader";
import RepoList from "@/src/components/user/RepoList";
import { toast } from "sonner";

export default function UserPage() {
  const { username } = useParams() as { username: string };

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

  return (
    <main className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      <UserHeader user={user} />
      <RepoList repos={repos} />
    </main>
  );
}