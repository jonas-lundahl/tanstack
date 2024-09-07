import { queryOptions } from "@tanstack/react-query";
import { getOwnerRepoIssues, getUser, getUserRepos } from "./endpoints.ts";
import { UserSchema } from "./schemas.ts";

export const userQueryOptions = (username: string) =>
  queryOptions({
    queryKey: ["user", { username }],
    queryFn: async () => {
      const response = await getUser(username);
      return UserSchema.parse(await response.json());
    },
  });

export const userReposQueryOptions = (username: string) =>
  queryOptions({
    queryKey: ["user", { username }, "repos"],
    queryFn: async () => {
      const response = await getUserRepos(username);
      return await response.json();
    },
  });

export const ownerRepoIssuesQueryOptions = (owner: string, repo: string) =>
  queryOptions({
    queryKey: ["issues", { owner, repo }],
    queryFn: async () => {
      const response = await getOwnerRepoIssues(owner, repo);
      return await response.json();
    },
  });
