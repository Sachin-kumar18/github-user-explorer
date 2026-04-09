"use client";

import { useEffect } from "react";
import { searchUsers } from "../lib/github";

export default function Home() {
  useEffect(()=> {
    async function fetchData() {
      const users = await searchUsers("john");
      console.log(users);
    }
    fetchData();
  })
  return (
    <main className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-semibold">GitHub User Explorer</h1>
    </main>
  );
}