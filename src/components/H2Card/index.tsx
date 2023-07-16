import { ReactNode } from "react";

import { H2 } from "./styles";

interface H2CardProps {
  children: string;
}

export function H2Card({ children }: H2CardProps) {
  return <H2>{children}</H2>;
}
