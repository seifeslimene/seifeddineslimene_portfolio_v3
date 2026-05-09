import { type NextRequest, NextResponse } from 'next/server';
import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_TOKEN,
});

export async function GET(req: NextRequest) {
  // Login
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();

  // All Repos
  const repos = await octokit.paginate(octokit.rest.repos.listForAuthenticatedUser, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
    affiliation: 'owner',
    per_page: 100,
  });

  // Filtered Repos with tolist Topic
  const reposToList = repos.filter((repo) => repo.topics?.includes('portfolio'));

  // Get 'Readme.md' Of each filteredRepo
  const ContentsToListPromises = reposToList.map(async ({ name: repo }) => {
    // const {
    //   data,
    // } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    //   owner: login,
    //   repo,
    //   path: 'README.md',
    //   headers: {
    //     'X-GitHub-Api-Version': '2022-11-28',
    //   },
    // });
    const { data } = await octokit.rest.repos.getContent({
      owner: login,
      repo,
      path: 'README.md',
    });
    return data["content"];
  });
  const ContentsToList = await Promise.all(ContentsToListPromises);

  // Finally return the contents Array
  return NextResponse.json({
    ContentsToList,
  });
}
