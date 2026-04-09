"use client";

import { useState } from "react";
import { Repo } from "../../types/github";
import RepoCard from "./RepoCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props {
  repos: Repo[];
}

export default function RepoList({ repos }: Props) {
  const [sort, setSort] = useState("stars");

  const sortedRepos = [...repos].sort((a, b) => {
    if (sort === "stars") {
      return b.stargazers_count - a.stargazers_count;
    } else {
      return (
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
      );
    }
  });

  return (
    <div className="mt-6 space-y-4">
      <div className="flex justify-end">
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="stars">Sort by Stars</SelectItem>
            <SelectItem value="updated">Last Updated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {sortedRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}