"use client";

import { Input } from "../ui/input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: Props) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Input
        placeholder="Search GitHub users..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 text-base"
      />
    </div>
  );
}