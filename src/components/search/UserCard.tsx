import Link from "next/link";
import { Card } from "../ui/card";
import Image from "next/image";
import { GitHubUser } from "../../types/github";

interface Props {
  user: GitHubUser;
}

export default function UserCard({ user }: Props) {
  return (
    <Link href={`/user/${user.login}`}>
      <Card className="p-4 items-center  gap-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer">
        <Image
          src={user.avatar_url}
          alt={user.login}
          width={48}
          height={48}
          className="rounded-full"
        />
        <p className="font-medium">{user.login}</p>
      </Card>
    </Link>
  );
}