import UserCard from "./UserCard";
import { GitHubUser } from "../../types/github";
import { Skeleton } from "../ui/skeleton";

interface Props {
  users: GitHubUser[];
  loading: boolean;
}

export default function SearchResults({ users, loading }: Props) {
  if (!loading && users.length===0) {
    return (
      <p className="text-center text-gray-500 mt-6">
      Start typing to search users 👀
    </p>
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