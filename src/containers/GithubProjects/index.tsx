// styles
import { Container, DivTitle, H1 } from "./styles";
// assets
import Image from "next/image";
import GithubIcon from "../../../public/assets/icons/github.svg";

export function GithubProjects() {
  return (
    <Container>
      <DivTitle>
        <Image src={GithubIcon} alt="GitHub Icon" width={48} /> <H1>GitHub</H1>
      </DivTitle>
    </Container>
  );
}
