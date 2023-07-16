import { ReactNode } from "react";

import { P } from "./styles";

interface PCardProps {
  children: string;
}

export function PCard({ children }: PCardProps) {
  return <P>{children}</P>;
}
