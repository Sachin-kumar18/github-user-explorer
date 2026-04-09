export interface GitHubUser {
  login: string;
  avatar_url: string;
}

export interface GitHubUserDetails {
  login: string;
  name: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}