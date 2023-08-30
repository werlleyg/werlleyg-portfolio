import { css } from "@emotion/react";
import styled from "@emotion/styled";

// types
interface IDivTimeLineBarProps {
  lastItem: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 1.75rem;
`;

export const DivLineAndMarker = styled.div`
  width: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  img {
    z-index: 1;
    transform: translateY(1rem);
  }
`;

export const DivTimeLineBar = styled.div<IDivTimeLineBarProps>`
  ${({ lastItem }) =>
    lastItem &&
    css`
      display: none;
    `}

  transform:translateY(1rem);
  background-color: var(--button-dark-color);
  width: 0.125rem;
  height: 100%;
  z-index: 0;
`;
export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 4rem;
`;
export const H2Title = styled.h2`
  color: var(--white-color);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const SpanTime = styled.span`
  color: var(--light-gray-color);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1.5rem;
`;
