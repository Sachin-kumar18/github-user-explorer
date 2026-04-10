import UserCard from "./UserCard";
import { GitHubUser } from "../../types/github";

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
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {users.map((user) => (
        <UserCard key={user.login} user={user} />
      ))}
    </div>
  );
}