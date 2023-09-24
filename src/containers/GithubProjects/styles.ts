import styled from "@emotion/styled";

export const Container = styled.div`
  width: min(100% - 3rem, var(--inner-max-width-in));
  margin-inline: auto;
  margin-top: 6rem;
`;

export const DivTitle = styled.div`
  display: flex;
  gap: 1rem;
`;

export const H1 = styled.h1`
  color: var(--white-color);
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
