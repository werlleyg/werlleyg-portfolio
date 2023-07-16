import styled from "@emotion/styled";

export const Container = styled.div`
  width: min(100%, var(--inner-max-width-in));
  margin-inline: auto;
  margin-top: 4rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DivContent = styled.div`
  display: flex;
  padding: 3rem 2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  border-radius: var(--border-radius);
  background: linear-gradient(
    180deg,
    var(--dark-gray-color) 0%,
    rgba(var(--background-color-rgb), 0) 100%
  );
`;

export const UlColumn = styled.ul`
  flex: 1;
`;

export const Li = styled.li`
  color: var(--white-color);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  margin-left: 1.125rem;
`;
