// components
import { Title } from "@/components/Title";
import { TimelineCard } from "@/components/TimelineCard";
// styles
import { Container, DivDeck } from "./styles";
// types
import { IExperience } from "@/dtos/experience";

export function Education() {
  const listEducationExperience: IExperience[] = [
    {
      current: false,
      title: "Especializado em Engenharia de Software pelo Grupo Prominas",
      time: "2022 - 2023",
      description: <>E-learning.</>,
    },
    {
      current: false,
      title: "Engenheiro Eletricista pela Universidade Federal do Ceará",
      time: "2016 - 2022",
      description: (
        <>
          Ênfase na área de comunicação: comunicações analógicas e digitais;
          princípios de comunicação; laboratório de comunicação; redes de
          computadores.
        </>
      ),
    },
  ];

  return (
    <Container>
      <Title>Formação</Title>
      <DivDeck>
        {listEducationExperience.map((experience, idx) => (
          <TimelineCard
            key={idx}
            experience={experience}
            lastItem={idx === listEducationExperience.length - 1}
          />
        ))}
      </DivDeck>
    </Container>
  );
}
