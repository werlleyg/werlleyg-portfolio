import { ReactNode, useCallback } from "react";

import { ACard, DivCardContent, DivCardHeader, SpanDate } from "./styles";
import { IQuickReadPost } from "@/dtos/quickRead";
import { H2Card } from "../H2Card";
import { PCard } from "../PCard";
import Image from "next/image";

export function CardQuickRead({
  title,
  image,
  published_at,
  description,
  link,
}: IQuickReadPost) {
  const getFormatedDate = useCallback((date: string) => {
    const auxDate = new Date(date);
    return `${auxDate.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })}`;
  }, []);

  return (
    <ACard href={link} target='_blank' title={title}>
      <DivCardHeader>
        <Image src={image} alt={title} />
      </DivCardHeader>
      <DivCardContent>
        <H2Card>{title}</H2Card>
        <SpanDate>Publicado em {getFormatedDate(published_at)}</SpanDate>
        <PCard>{description}</PCard>
      </DivCardContent>
    </ACard>
  );
}
