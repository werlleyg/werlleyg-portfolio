import styled from "@emotion/styled";

export const Container = styled.button`
  display: inline-flex;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.5rem;

  border: 0;
  border-radius: 0.25rem;
  background: linear-gradient(
    180deg,
    var(--dark-gray-color) 0%,
    var(--background-color) 100%
  );

  color: var(--white-color);

  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  img {
    width: 2rem;
    aspect-ratio: 1/1;
  }

  :hover {
    background: linear-gradient(
      180deg,
      var(--button-gray-color) 0%,
      var(--button-gray-color) 100%
    );
  }
`;
