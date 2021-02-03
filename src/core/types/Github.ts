export type GitHubResponse = {
  content: Github[];
};

export type Github = {
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  company: string;
  blog: string;
  location: string;
  created_at: string;
};
