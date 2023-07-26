import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 6rem;

  width: min(100%, var(--max-width));
  margin-inline: auto;
  align-items: center;
  justify-content: center;
`;

export const DivDeck = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
