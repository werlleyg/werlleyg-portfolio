import styled from "@emotion/styled";

export const CardProject = styled.a`
  display: grid;
  grid-template-columns: 10.625rem 1fr;
  flex-wrap: wrap;
  width: 31.25rem;
  height: 16.875rem;
  border-radius: var(--border-radius);
  background-color: var(--white-color);
  overflow: hidden;

  transition: var(--animation-time);

  :hover {
    transform: translateY(-0.25rem);
    border-bottom: 0.375rem solid var(--primary-color);
  }
`;

export const DivCardPreview = styled.div`
  background-color: var(--primary-color);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DivCardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const P = styled.p`
  color: var(--middle-gray-color);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
