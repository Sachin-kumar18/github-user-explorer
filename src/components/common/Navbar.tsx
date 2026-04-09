"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <Link href="/" className="font-semibold text-lg">
        GitHub Explorer
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/bookmarks">Bookmarks</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}