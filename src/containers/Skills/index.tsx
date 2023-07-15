import { ReactNode, useState } from "react";

import { Container, DivContent, Li, UlColumn } from "./styles";
import { Title } from "@/components/Title";

export function Skills() {
  const [skillData] = useState({
    firstColumnData: [
      "+6 anos de experiência com HTML, CSS e JavaScript;",
      "Desenvolvimento de sistemas WEB responsivos e aplicações Mobile;",
      "Designer WEB/Mobile (UI) e User Experience (UX);",
      "CI/CD pipelines com GitHub Actions;",
      "Desenvolvimentos Front-end seguindo o conceito de Pixel Perfection com Figma;",
      "Versionamento de projetos usando Conventional Commits com GitHub;",
      "Desenvolvimento com metodologias ágeis;",
      "Ferramentas de SEO como Google Search Console e Clarity;",
      "Utilização de serviços como Digital Ocean, Amazon WEB Services (AWS) e Vercel;",
    ],
    secondColumnData: [
      "Utilização de softwares como Visual Studio Code, AutoCAD, ferramentas do Office;",
      "Experiência em plataformas para gerenciamento de projetos como ClickUp, Asana e Trello;",
      "Experiência em eletrica e eletrônica em geral; ",
      "Participativo, comunicativo, gosta de trabalhar em equipe e sempre aberto a novas experiências; ",
      "Amante de tecnologia e inovação!",
    ],
  });

  return (
    <Container>
      <Title>Habilidades</Title>
      <DivContent>
        <UlColumn>
          {skillData.firstColumnData.map((skill) => (
            <Li key={skill}>{skill}</Li>
          ))}
        </UlColumn>
        <UlColumn>
          {skillData.secondColumnData.map((skill, idx) => (
            <Li
              key={skill}
              style={{
                fontWeight:
                  idx === skillData.secondColumnData.length - 1 ? "700" : "300",
              }}
            >
              {skill}
            </Li>
          ))}
        </UlColumn>
      </DivContent>
    </Container>
  );
}
