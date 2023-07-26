import { ReactNode } from "react";

import { CardProject, DivCardContent, DivCardPreview, P } from "./styles";
import { ICardMyProject } from "@/dtos/myprojects";
import { H2Card } from "../H2Card";
import Image from "next/image";

export function CardMyProject({
  title,
  image,
  description,
  skills,
  technologies,
  link,
}: ICardMyProject) {
  return (
    <CardProject href={link} target='_blank'>
      <DivCardPreview>
        <Image src={image} alt={title} />
      </DivCardPreview>
      <DivCardContent>
        <H2Card>{title}</H2Card>

        <P>{description}</P>
        <P>
          <b>Atuação:</b> {skills}
        </P>
        <P>
          <b>Tecnologias:</b> {technologies}
        </P>
      </DivCardContent>
    </CardProject>
  );
}
