import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const DivOutProfileImage = styled.div`
  width: 16.625rem;
  aspect-ratio: 1/1;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--primary-color);
  margin: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  color: var(--white-color);
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const H3 = styled.h3`
  color: var(--light-gray-color);
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  width: min(100%, 30.75rem);
  margin-inline: auto;
`;

export const Divider = styled.div`
  width: 4rem;
  height: 0.0625rem;
  flex-shrink: 0;
  background-color: var(--white-color);
`;
export const DivSocialMedias = styled.div`
  display: flex;
  gap: 1.25rem;
  margin: 1rem;
`;
export const ButtonSocialMedia = styled.a`
  filter: grayscale(1) brightness(2);
  transition: 0.3s;

  :hover {
    filter: initial;
  }
`;
