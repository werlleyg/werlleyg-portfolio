import { Title } from "@/components/Title";
import { Container, DivLeftColumn, DivRightColumn, P } from "./styles";
import Image from "next/image";

// images
import AboutMeImage from "../../../public/assets/images/about-me.png";

export function AboutMe() {
  return (
    <Container>
      <DivLeftColumn>
        <Title>Sobre mim</Title>
        <P>
          Amante de tecnologia! Entusiasta e dedicado Engenheiro Eletricista
          pós-graduado em Engenharia de Software com mais de 6 anos de
          experiência com programação e 4 anos de experiência de mercado na área
          de programação WEB e mobile utilizando tecnologias como React.JS,
          Next.JS, Ionic, Angular e TypeScript. Bastante proativo com a
          capacidade de trabalhar de forma independente ou como parte de uma
          equipe de sucesso, demonstrando a motivação e as habilidades
          multitarefas necessárias para cumprir prazos exigentes mantendo os
          mais altos padrões.
        </P>
      </DivLeftColumn>
      <DivRightColumn>
        <Image src={AboutMeImage} alt='Werlley Gonçalves' />
      </DivRightColumn>
    </Container>
  );
}
