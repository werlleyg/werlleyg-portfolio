import { useState } from "react";
import { Container, DivDeck } from "./styles";
// components
import { Title } from "@/components/Title";
import { CardMyProject } from "@/components/CardMyProject";
// types
import { IMyProject } from "@/dtos/myProjects";
// images
import BittrainersImage from "../../../public/assets/images/my-projects/bittrainers.png";
import BitbookImage from "../../../public/assets/images/my-projects/bitbook.png";
import UxsoftwareImage from "../../../public/assets/images/my-projects/uxsoftware.png";
import MeusiteagilImage from "../../../public/assets/images/my-projects/meusiteagil.png";
import TellarsolucoesImage from "../../../public/assets/images/my-projects/tellarsolucoes.png";
import InterispImage from "../../../public/assets/images/my-projects/interisp.png";

export function MyProjects() {
  const [myProjects] = useState<IMyProject[]>([
    {
      title: "Bit Trainers",
      image: BittrainersImage,
      description:
        "Plataforma de transformação diária voltada para a prática de atividades físicas personalizadas, ajudando as pessoas a se exercitarem com inteligência onde e quando quiserem.",
      skills: "Dev. WEB e Mobile",
      technologies: "Ionic, Angular, NgRx, Capacitor, TypeScript, HTML, SCSS.",
      link: "https://web.bittrainers.com.br/",
      color: undefined,
    },
    {
      title: "Bit Book",
      image: BitbookImage,
      description:
        "Plataforma de e-books e audiobooks online, voltada para o gênero saúde e bem-estar. Os leitores tem acesso ao acervo de forma ilimitada para ler e ouvir, quantas vezes desejar, os conteúdos na plataforma. ",
      skills: "Dev. WEB e Mobile",
      technologies: "Ionic, Angular, NgRx, Capacitor, TypeScript, HTML, SCSS.",
      link: "https://bitbook.app.br/",
      color: "var(--purple-dark-title-color)",
    },
    {
      title: "UX Software",
      image: UxsoftwareImage,
      description:
        "Empresa de desenvolvedores destinada ao planejamento, construção e manutenção de soluções tecnológicas das mais variadas origens e finalidades.",
      skills: "Dev. WEB e Mobile",
      technologies:
        "Next.js, TypeScript, Swiper, @Emotion, Axios, Eslint, AWS SES, Vercel, Git Actions, Figma, Google Search, Clarity.",
      link: "https://www.uxsoftware.com.br/",
      color: "var(--green-light-title-color)",
    },
    {
      title: "Meu Site Ágil",
      image: MeusiteagilImage,
      description:
        "Empresa de desenvolvedores destinada ao planejamento, construção e manutenção de sites e sistemas WEB/Mobile para provedores de internet.",
      skills: "Dev. WEB responsivo e designer",
      technologies:
        "Next.js, TypeScript, Swiper, @Emotion, Axios, Eslint, Vercel, Git Actions, Figma, Google Search, Clarity.",
      link: "http://meusiteagil.com.br/",
      color: "var(--purple-light-title-color)",
    },
    {
      title: "Tellar Soluções",
      image: TellarsolucoesImage,
      description:
        "Empresa especializada em elaboração e homologação de projetos fotovoltaicos, com o intuito de ajudar integradores disponibilizando plataforma de projetos.",
      skills: "Dev. WEB responsivo e designer",
      technologies:
        "React.js, JavaScript, Material UI, Styled Components, Axios, Leaflet, Pagar.me, Toastify.",
      link: "https://portal.tellarsolucoes.com.br/",
      color: "var(--green-dark-title-color)",
    },
    {
      title: "Inter ISP",
      image: InterispImage,
      description:
        "Feira corporativa com alcance em todo território nacional para os setores de Telecomunicações, Tecnologia e Segurança do Brasil e do Mundo. ",
      skills: "Dev. WEB responsivo e designer",
      technologies:
        "Next.js, TypeScript, @Emotion, Material UI, Axios, Eslint, Date-fns, Vercel, Google Search, Google Tag Manager, Meta Pixel.",
      link: "https://www.interisp.com.br/",
      color: "var(--blue-dark-title-color)",
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
