import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 20.625rem;
  gap: 1.875rem;

  width: min(100% - 2rem, 64rem);
  margin-inline: auto;
  padding-top: 4rem;

  @media screen and (max-width: 674px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DivLeftColumn = styled.div``;
export const DivRightColumn = styled.div`
  @media screen and (max-width: 674px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const P = styled.p`
  color: var(--white-color);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 120% */
  margin: 1rem;
`;
