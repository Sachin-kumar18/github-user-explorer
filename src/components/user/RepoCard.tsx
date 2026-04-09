import { Repo } from "../../types/github";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface Props {
  repo: Repo;
}

export default function RepoCard({ repo }: Props) {
  return (
    <Card className="p-4 space-y-2">
      <h3 className="font-medium">{repo.name}</h3>

      {repo.description && (
        <p className="text-sm text-gray-500">{repo.description}</p>
      )}

      <div className="flex items-center gap-3 text-sm">
        <span>⭐ {repo.stargazers_count}</span>

        {repo.language && (
          <Badge variant="secondary">{repo.language}</Badge>
        )}
      </div>
    </Card>
  );
}