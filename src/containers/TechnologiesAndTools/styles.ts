import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.375rem;
  padding-bottom: 0.5rem;
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const SpanTitle = styled.span`
  color: var(--white-color);
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

export const DivDeckTechnologies = styled.div`
  width: min(100%, 68.25rem);
  margin-inline: auto;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
