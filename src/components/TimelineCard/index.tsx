// assets
import Image from "next/image";
import TimelineMark from "../../../public/assets/icons/timeline-mark.svg";
import CurrentMark from "../../../public/assets/icons/current-mark.svg";
// styles
import {
  Container,
  DivContent,
  DivLineAndMarker,
  DivTimeLineBar,
  H2Title,
  SpanTime,
} from "./styles";
// components
import { PCard } from "../PCard";
// types
import { IExperience } from "@/dtos/experience";

interface ITimeLineCardProps {
  experience: IExperience;
  lastItem: boolean;
}

export function TimelineCard({ experience, lastItem }: ITimeLineCardProps) {
  return (
    <Container>
      <DivLineAndMarker>
        <Image
          src={experience.current ? CurrentMark : TimelineMark}
          alt="timeline mark"
        />
        <DivTimeLineBar lastItem={lastItem} />
      </DivLineAndMarker>
      <DivContent>
        <H2Title>{experience.title}</H2Title>
        <SpanTime>{experience.time}</SpanTime>
        <PCard notHideText>{experience.description}</PCard>
      </DivContent>
    </Container>
  );
}
