import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 20.625rem;
  gap: 1.875rem;

  width: min(100% - 2rem, 64rem);
  margin-inline: auto;
  padding-top: 4rem;
`;

export const DivLeftColumn = styled.div``;
export const DivRightColumn = styled.div``;
export const P = styled.p`
  color: var(--white-color);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 120% */
  margin: 1rem;
`;
