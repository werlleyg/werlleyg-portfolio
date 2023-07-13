import { ReactNode } from "react";
import { Container } from "./styles";

interface TechnologyProps {
  children: ReactNode;
}

export function Technology({ children }: TechnologyProps) {
  return <Container>{children}</Container>;
}
