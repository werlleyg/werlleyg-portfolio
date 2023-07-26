import { useState } from "react";
import { Container, DivDeck } from "./styles";
// components
import { Title } from "@/components/Title";
import { CardMyProject } from "@/components/CardMyProject";
// types
import { IMyProject } from "@/dtos/myProjects";
// images
import BittrainersImage from "../../../public/assets/images/my-projects/bittrainers.png";

export function MyProjects() {
  const [myProjects] = useState<IMyProject[]>([
    {
      title: "Bittrainers",
      image: BittrainersImage,
      description:
        "Plataforma de transformação diária voltada para a prática de atividades físicas personalizadas, ajudando as pessoas a se exercitarem com inteligência onde e quando quiserem.",
      skills: "Dev. WEB e Mobile",
      technologies: "Ionic, Angular, NgRx, Capacitor, TypeScript, HTML, SCSS.",
      link: "https://web.bittrainers.com.br/",
    },
  ]);
  return (
    <Container>
      <Title>Alguns projetos em que participei</Title>
      <DivDeck>
        {myProjects.map((project) => (
          <CardMyProject key={project.title} {...project} />
        ))}
      </DivDeck>
    </Container>
  );
}
