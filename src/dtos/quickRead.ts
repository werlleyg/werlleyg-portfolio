import { StaticImageData } from "next/image";

export interface IQuickReadPost {
  title: string;
  image: StaticImageData;
  published_at: string;
  description: string;
  link: string;
}
