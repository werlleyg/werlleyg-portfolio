import styled from "@emotion/styled";

export const Container = styled.div`
  width: min(100%, var(--inner-max-width));
  margin-inline: auto;

  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: var(--white-color);
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

export const DivOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DivSetLanguage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: var(--white-color);

  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  label {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.5rem;

    input {
      visibility: hidden;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--dark-gray-color);
      border-radius: var(--switch-border-radius);

      transition: 0.4s;
    }
    .slider:before {
      position: absolute;
      border-radius: 50%;
      content: "";
      height: 1.75rem;
      width: 1.75rem;
      left: 0;
      bottom: 0;
      top: -0.125rem;
      background-color: var(--primary-color);
      transition: 0.4s;
    }
    input:checked + .slider {
      background-color: var(--primary-color);
    }

    input:checked + .slider:before {
      transform: translateX(1.5rem);
      background-color: var(--white-color);
    }
  }
`;

export const ButtonContact = styled.a`
  display: inline-flex;
  padding: 0.5rem 1.5rem 0.5rem 1.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: var(--button-border-radius);
  background: var(--button-dark-color);
  border: 0;

  color: var(--primary-color);
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  img {
    width: 1.75rem;
    aspect-ratio: 1/1;
  }
`;
