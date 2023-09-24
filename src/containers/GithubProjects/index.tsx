import { useCallback, useEffect, useState } from "react";
// styles
import { Container, Deck, DivTitle, H1 } from "./styles";
// assets
import Image from "next/image";
import GithubIcon from "../../../public/assets/icons/github.svg";
// utils
import { getGitHubRepositories } from "@/utils/github";
// types
import { IRepository } from "@/dtos/github";
// components
import { CardGithub } from "@/components/CardGithub";

export function GithubProjects() {
  const GITHUB_QUERY: string = "user:werlleyg";
  const [repositories, setRespositories] = useState<IRepository[]>();

  const getRepositories = useCallback(async () => {
    const auxRepositories: IRepository[] = await getGitHubRepositories(
      GITHUB_QUERY,
    );
    setRespositories(auxRepositories);
  }, []);

  useEffect(() => {
    getRepositories();
  }, [getRepositories]);

  return (
    <Container>
      <DivTitle>
        <Image src={GithubIcon} alt="GitHub Icon" width={48} /> <H1>GitHub</H1>
      </DivTitle>
      <Deck>
        {repositories?.map((repository) => (
          <CardGithub key={repository.id} repository={repository} />
        ))}
      </Deck>
    </Container>
  );
}
