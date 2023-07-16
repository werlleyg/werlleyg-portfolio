import { ReactNode } from "react";

import { P } from "./styles";

interface TitleProps {
  children: string;
}

export function PCard({ children }: TitleProps) {
  return <P>{children}</P>;
}
