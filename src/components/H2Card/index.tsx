import { ReactNode } from "react";

import { H2 } from "./styles";

interface H2CardProps {
  children: string;
  titleColor?: string;
}

export function H2Card({ children, titleColor }: H2CardProps) {
  return <H2 titleColor={titleColor}>{children}</H2>;
}
