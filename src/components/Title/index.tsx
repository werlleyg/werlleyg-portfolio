import { ReactNode } from "react";

import { H1 } from "./styles";

interface TitleProps {
  children: string;
}

export function Title({ children }: TitleProps) {
  return <H1>{children}</H1>;
}
