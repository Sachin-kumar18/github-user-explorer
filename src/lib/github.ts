import { GitHubUser, GitHubUserDetails, Repo } from "../types/github";

const BASE_URL = "https://api.github.com";

async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`GitHub API Error: ${res.status}`);
  }

  return res.json();
}

export async function searchUsers(query: string): Promise<GitHubUser[]> {
  if (!query) return [];

  const data = await fetchData<{ items: GitHubUser[] }>(
    `${BASE_URL}/search/users?q=${query}`
  );

  return data.items;
}

export async function getUser(username: string): Promise<GitHubUserDetails> {
  return fetchData<GitHubUserDetails>(
    `${BASE_URL}/users/${username}`
  );
}

export async function getUserRepos(
  username: string,
  page = 1,
  perPage = 10
): Promise<Repo[]> {
  return fetchData<Repo[]>(
    `${BASE_URL}/users/${username}/repos?page=${page}&per_page=${perPage}`
  );
}