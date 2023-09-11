// components
import { Title } from "@/components/Title";
import { TimelineCard } from "@/components/TimelineCard";
// styles
import { Container, DivDeck } from "./styles";
// types
import { IExperience } from "@/dtos/experience";

export function AdditionalEducation() {
  const listEducationExperience: IExperience[] = [
    {
      current: true,
      title: "Curso de Inglês",
      time: "2023",
      description: <>Take In - Célio Camelo.</>,
    },
    {
      current: false,
      title: "Curso Intensivo de Fibra Optica - Redes FTTh",
      time: "2022",
      description: <>Alan Araújo Engenharia de Telecomunicações.</>,
    },
    {
      current: false,
      title: "Curso de Machine Learning e Data Science utilizando Python",
      time: "2019",
      description: <>Marcos Castro and Gileno Alves - Udemy.</>,
    },
    {
      current: false,
      title: "Fundamentos de Lean Manufaturing",
      time: "2019",
      description: <>Gleison Guimarães - Udemy.</>,
    },
  ];

  return (
    <Container>
      <Title>Formação Complementar</Title>
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
