// services
import { GITHUB_API } from "@/services/github-api";
// types
import { IRepository } from "@/dtos/github";

/**
 * Function to fetch GitHub repositories based on a search keyword.
 *
 * @param searchWord The search keyword to find repositories.
 * @returns A Promise that resolves to an array of repository objects (IRepository).
 */
export async function getGitHubRepositories(
  searchWord: string,
): Promise<IRepository[]> {
  try {
    // Make a GET request to the GitHub API to search for repositories with the specified keyword.
    const respose = await GITHUB_API.get(
      `/search/repositories?q=${searchWord}`,
    );
    // Extract the data from the response.
    const data = await respose.data;
    // Sort the repositories by creation date, from newest to oldest.
    const respositories: IRepository[] = data?.items?.sort(
      (a: IRepository, b: IRepository) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
    // Return the sorted list of repositories.
    return respositories;
  } catch (error) {
    // In case of an error, print an error message to the console and return an empty array as a fallback.
    console.log("[github error] ", error);
    return [];
  }
}
