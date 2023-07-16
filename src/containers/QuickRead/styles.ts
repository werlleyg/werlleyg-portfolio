import styled from "@emotion/styled";

export const Container = styled.div`
  width: min(100%, var(--max-width));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;

export const DivDeck = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
