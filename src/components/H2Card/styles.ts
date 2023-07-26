import styled from "@emotion/styled";

interface IH2 {
  titleColor?: string;
}

export const H2 = styled.h2<IH2>`
  color: ${(props) =>
    props.titleColor ? props.titleColor : "var(--background-color)"};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
