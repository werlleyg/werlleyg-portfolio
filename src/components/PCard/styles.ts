import styled from "@emotion/styled";

export const P = styled.p`
  color: var(--middle-gray-color);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
