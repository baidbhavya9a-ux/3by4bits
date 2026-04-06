const { Octokit } = require('@octokit/rest');

async function fetchUserRepos(githubUsername) {
  const octokit = new Octokit();
  try {
    const { data } = await octokit.rest.repos.listForUser({
      username: githubUsername,
      sort: 'updated',
      per_page: 100
    });
    return data.map(r => ({
      name: r.name,
      language: r.language,
      stargazers_count: r.stargazers_count,
      fork: r.fork,
      size: r.size,
      updated_at: r.updated_at
    })).filter(r => !r.fork);
  } catch (error) {
    console.error(`Error fetching repos for ${githubUsername}:`, error);
    return [];
  }
}

async function fetchUserStats(githubUsername) {
  const octokit = new Octokit();
  try {
    const { data } = await octokit.rest.users.getByUsername({
      username: githubUsername
    });
    return {
      followers: data.followers,
      public_repos: data.public_repos,
      public_gists: data.public_gists,
      created_at: data.created_at
    };
  } catch (error) {
    console.error(`Error fetching stats for ${githubUsername}:`, error);
    return { followers: 0, public_repos: 0, public_gists: 0, created_at: new Date() };
  }
}

module.exports = {
  fetchUserRepos,
  fetchUserStats
};
