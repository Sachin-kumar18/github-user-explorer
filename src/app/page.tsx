"use client";

import { useEffect, useState } from "react";
import { searchUsers } from "../lib/github";
import { GitHubUser } from "../types/github";
import SearchInput from "../components/search/SearchInput";
import SearchResults from "../components/search/SearchResults";
import { useDebounce } from "../hooks/useDebounce";
import { toast } from "sonner";

export default function Home() {

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    async function fetchUsers() {
      if(!debouncedQuery){
        setUsers([]);
        return;
      }
      try {
        setLoading(true);
        const data = await searchUsers(debouncedQuery);
        setUsers(data);
      } catch {
        toast.error("Failed to fetch users")
      }finally{
        setLoading(false);
      }
    }
    fetchUsers();
  }, [debouncedQuery])
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-2xl space-y-6">
      <h1 className="text-2xl font-semibold">GitHub User Explorer</h1>

      <SearchInput  value={query} onChange={setQuery}/>
      <SearchResults users={users} loading={loading}/>
      </div>
    </main>
  );
}