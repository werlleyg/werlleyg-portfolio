import Image from "next/image";
// styles
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderContent,
  Container,
  LanguageContent,
  LinkRepo,
  PContent,
  SpanAuthor,
} from "./styles";
// types
import { IRepository } from "@/dtos/github";
// utils
import { getDate } from "@/utils/dates";

interface ICardGithubProps {
  repository: IRepository;
}

export function CardGithub({ repository }: ICardGithubProps) {
  return (
    <Container>
      <CardHeader>
        <Image
          src={repository.owner.avatar_url}
          alt={`${repository.owner.login} avaatar`}
          width={40}
          height={40}
        />
        <CardHeaderContent>
          <SpanAuthor>{repository.owner.login}</SpanAuthor>
          <LinkRepo href={repository.html_url} target="_blank" rel="noreferrer">
            {repository.name}
          </LinkRepo>
        </CardHeaderContent>
      </CardHeader>
      <CardContent>
        <PContent>{repository.description || "- no description"}</PContent>
        <LanguageContent>
          <label>★</label> <span> {repository.language || "---"}</span>
        </LanguageContent>
      </CardContent>
      <CardFooter>{getDate(repository.created_at)}</CardFooter>
    </Container>
  );
}
