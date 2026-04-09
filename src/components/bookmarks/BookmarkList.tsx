"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import Image from "next/image";

export default function BookmarkList() {
  const bookmarks = useSelector(
    (state: RootState) => state.bookmarks.users
  );

  return (
    <div className="grid gap-4 mt-6">
      {bookmarks.map((user) => (
        <Link key={user.login} href={`/user/${user.login}`}>
          <Card className="p-4 flex items-center gap-4 hover:shadow-md transition">
            <Image
              src={user.avatar_url}
              width={40}
              height={40}
              alt={user.login}
              className="rounded-full"
            />
            <p>{user.login}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}