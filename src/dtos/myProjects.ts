import { StaticImageData } from "next/image";

export interface ICardMyProject {
  title: string;
  image: StaticImageData;
  description: string;
  link: string;
  skills: string;
  technologies: string;
}
