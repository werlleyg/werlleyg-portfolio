import { StaticImageData } from "next/image";

export interface IMyProject {
  title: string;
  image: StaticImageData;
  description: string;
  link: string;
  skills: string;
  technologies: string;
  color?: string;
}
