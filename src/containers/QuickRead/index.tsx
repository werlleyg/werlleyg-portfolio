import { useCallback, useState } from "react";

import { Container, DivDeck } from "./styles";
import { Title } from "@/components/Title";

// images
import Post01Image from "../../../public/assets/images/quick-read/post-1.jpg";

import { IQuickReadPost } from "@/dtos/quickRead";
import { CardQuickRead } from "@/components/CardQuickRead";

export function QuickRead() {
  const [postsData] = useState<IQuickReadPost[]>([
    {
      title: "Síndrome do impostor",
      image: Post01Image,
      published_at: "2023-06-19T03:21:02.604Z",
      description:
        'Fala pessoal, tudo bom? Hoje venho conversar com vocês sobre algo que já aconteceu bastante comigo e pode ser que aconteça com mais alguém. Já ouviram falar sobre "Síndrome do impostor"? Se não, comentarei um pouco com vocês.',
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7076365932083691520/",
    },
  ]);

  return (
    <Container>
      <Title>Leitura Rápida</Title>
      <DivDeck>
        {postsData.map((post) => (
          <CardQuickRead {...post} key={post.title} />
        ))}
      </DivDeck>
    </Container>
  );
}
