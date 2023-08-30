import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IPProps {
  notHideText?: boolean;
}

export const P = styled.p<IPProps>`
  color: var(--middle-gray-color);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ${({ notHideText }) =>
    !notHideText &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
