import { ReactNode } from "react";

import { H2 } from "./styles";

interface TitleProps {
  children: string;
}

export function H2Card({ children }: TitleProps) {
  return <H2>{children}</H2>;
}
