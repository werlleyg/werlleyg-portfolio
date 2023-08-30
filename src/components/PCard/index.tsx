import { ReactNode } from "react";

import { P } from "./styles";

interface PCardProps {
  children: ReactNode;
  notHideText?: boolean;
}

export function PCard({ children, notHideText }: PCardProps) {
  return <P notHideText={notHideText}>{children}</P>;
}
