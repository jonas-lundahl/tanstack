const BASE_URL = "https://api.github.com";

const endpoints = {
  user: (username: string) => `${BASE_URL}/users/${username}`,
  userRepos: (username: string) => `${BASE_URL}/users/${username}/repos`,
  ownerRepoIssues: (owner: string, repo: string) =>
    `${BASE_URL}/repos/${owner}/${repo}/issues`,
} as const;

export async function getUser(username: string) {
  return await fetch(endpoints.user(username));
}

export async function getUserRepos(username: string) {
  return await fetch(endpoints.userRepos(username));
}

export async function getOwnerRepoIssues(owner: string, repo: string) {
  return await fetch(endpoints.ownerRepoIssues(owner, repo));
}
