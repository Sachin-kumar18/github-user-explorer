import UserCard from "./UserCard";
import { GitHubUser } from "../../types/github";
import { Skeleton } from "../ui/skeleton";

interface Props {
  users: GitHubUser[];
  loading: boolean;
}

export default function SearchResults({ users, loading }: Props) {
  if (loading) {
    return (
      <div className="grid gap-4 mt-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 mt-6">
      {users.map((user) => (
        <UserCard key={user.login} user={user} />
      ))}
    </div>
  );
}