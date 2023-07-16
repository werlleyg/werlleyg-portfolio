import styled from "@emotion/styled";

export const ACard = styled.a`
  display: grid;
  grid-template-rows: 6.25rem 1fr;
  flex-wrap: wrap;
  width: 24rem;
  height: 16.75rem;
  border-radius: var(--border-radius);
  background-color: var(--white-color);
  overflow: hidden;

  transition: var(--animation-time);

  :hover {
    transform: translateY(-0.25rem);
    border-bottom: 0.375rem solid var(--primary-color);
  }
`;

export const DivCardHeader = styled.div`
  background-color: var(--primary-color);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 30%;
  }
`;

export const DivCardContent = styled.div`
  padding: 1rem;
`;

export const SpanDate = styled.span`
  color: var(--middle-gray-color);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 0.5rem;
  display: inline-block;
`;
