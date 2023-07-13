import { Title } from "@/components/Title";
import { Container, DivDeckTechnologies, DivTitle, SpanTitle } from "./styles";
import { useState } from "react";

// icons
import NextjsIcon from "../../../public/assets/icons/nextjs.svg";
import ReactjsIcon from "../../../public/assets/icons/reactjs.svg";
import IonicIcon from "../../../public/assets/icons/ionic.svg";
import AngularIcon from "../../../public/assets/icons/angular.svg";
import NodejsIcon from "../../../public/assets/icons/nodejs.svg";
import TypescriptIcon from "../../../public/assets/icons/typescript.svg";
import NgrxIcon from "../../../public/assets/icons/ngrx.svg";
import Html5Icon from "../../../public/assets/icons/html5.svg";
import Css3Icon from "../../../public/assets/icons/css3.svg";
import SassIcon from "../../../public/assets/icons/sass.svg";
import StyledComponentsIcon from "../../../public/assets/icons/styled-components.svg";
import MaterialUiIcon from "../../../public/assets/icons/material-ui.svg";
import PrismaIcon from "../../../public/assets/icons/prisma.svg";
import AxiosIcon from "../../../public/assets/icons/axios.svg";
import EslintIcon from "../../../public/assets/icons/eslint.svg";
import PrettierIcon from "../../../public/assets/icons/prettier.svg";
import ClarityIcon from "../../../public/assets/icons/clarity.svg";
import GoogleSearchIcon from "../../../public/assets/icons/google-search.svg";
import PixelIcon from "../../../public/assets/icons/pixel.svg";
import FigmaIcon from "../../../public/assets/icons/figma.svg";
import ClickupIcon from "../../../public/assets/icons/clickup.svg";
import VercelIcon from "../../../public/assets/icons/vercel.svg";
import DigitalOceanIcon from "../../../public/assets/icons/digital-ocean.svg";
import AwsIcon from "../../../public/assets/icons/aws.svg";
import GithubIcon from "../../../public/assets/icons/github.svg";
import GithubActionsIcon from "../../../public/assets/icons/github-actions.svg";

// types
import { ITechnologies } from "@/dtos/technologiesAndTools";
import { Technology } from "@/components/Technology";
import Image from "next/image";

export function TechnologiesAndTools() {
  const [technologies] = useState<ITechnologies[]>([
    {
      title: "Next.js",
      icon: NextjsIcon,
    },
    {
      title: "React.js",
      icon: ReactjsIcon,
    },
    {
      title: "Ionic",
      icon: IonicIcon,
    },
    {
      title: "Angular",
      icon: AngularIcon,
    },
    {
      title: "Node.js",
      icon: NodejsIcon,
    },
    {
      title: "TypeScript",
      icon: TypescriptIcon,
    },
    {
      title: "NgRx",
      icon: NgrxIcon,
    },
    {
      title: "HTML5",
      icon: Html5Icon,
    },
    {
      title: "CSS3",
      icon: Css3Icon,
    },
    {
      title: "Sass",
      icon: SassIcon,
    },
    {
      title: "Styled Components",
      icon: StyledComponentsIcon,
    },
    {
      title: "Material UI",
      icon: MaterialUiIcon,
    },
    {
      title: "Prisma",
      icon: PrismaIcon,
    },
    {
      title: "Axios",
      icon: AxiosIcon,
    },
    {
      title: "ESLint",
      icon: EslintIcon,
    },
    {
      title: "Prettier",
      icon: PrettierIcon,
    },
    {
      title: "Clarity",
      icon: ClarityIcon,
    },
    {
      title: "Google Search",
      icon: GoogleSearchIcon,
    },
    {
      title: "Pixel",
      icon: PixelIcon,
    },
    {
      title: "Figma",
      icon: FigmaIcon,
    },
    {
      title: "ClickUp",
      icon: ClickupIcon,
    },
    {
      title: "Vercel",
      icon: VercelIcon,
    },
    {
      title: "Digital Ocean",
      icon: DigitalOceanIcon,
    },
    {
      title: "AWS",
      icon: AwsIcon,
    },
    {
      title: "GitHub",
      icon: GithubIcon,
    },
    {
      title: "GitHub Actions",
      icon: GithubActionsIcon,
    },
  ]);

  return (
    <Container>
      <DivTitle>
        <Title>Tecnologias</Title>
        <SpanTitle>&</SpanTitle>
        <Title>Ferramentas</Title>
      </DivTitle>
      <DivDeckTechnologies>
        {technologies.map((technology) => (
          <Technology key={technology.title}>
            <Image
              src={technology.icon}
              alt={technology.title}
              title={technology.title}
            />
            {technology.title}
          </Technology>
        ))}
      </DivDeckTechnologies>
    </Container>
  );
}
