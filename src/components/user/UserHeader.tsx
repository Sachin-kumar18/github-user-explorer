import { GitHubUserDetails } from "../../types/github";
import Image from "next/image";

interface Props {
  user: GitHubUserDetails;
}

export default function UserHeader({ user }: Props) {
  return (
    <div className="flex items-center gap-6">
      <Image
        src={user.avatar_url}
        alt={user.login}
        width={80}
        height={80}
        className="rounded-full"
      />

      <div>
        <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
        <p className="text-sm text-gray-500">{user.bio}</p>

        <div className="flex gap-4 mt-2 text-sm">
          <span>👥 {user.followers} followers</span>
          <span>➡️ {user.following} following</span>
          <span>📦 {user.public_repos} repos</span>
        </div>

        {user.location && (
          <p className="text-sm mt-1">📍 {user.location}</p>
        )}
      </div>
    </div>
  );
}