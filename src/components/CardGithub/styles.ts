import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  width: min(100%, 358px);

  min-width: 358px;
  min-height: 172px;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: 0.3s;

  display: grid;
  grid-template-rows: 0.9fr 1fr 1rem;
  background-color: var(--button-dark-color);
  border-bottom: 0.375rem solid var(--transparent);

  :hover {
    transform: translateY(-2.5%);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    border-bottom: 0.375rem solid var(--primary-color);
  }

  @media screen and (max-width: 72rem) {
    width: 49.5%;
  }
  @media screen and (max-width: 54rem) {
    width: 100%;
    min-width: initial;

    :hover {
      transform: initial;
      box-shadow: initial;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  img {
    border-radius: 50%;
    transform: translateY(10%);
    border: 2px solid var(--light-gray-color);
  }
`;

export const CardHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpanAuthor = styled.span`
  color: var(--white-color);
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const LinkRepo = styled(Link)`
  color: var(--white-color);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PContent = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 0rem 0.5rem;
  color: var(--white-color);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LanguageContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 0.5rem;
  gap: 0.25rem;
  color: var(--white-color);

  span {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const CardFooter = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: flex-end;
  font-size: 0.7rem;
  color: var(--middle-gray-color);
  transform: translate(2%, 60%);

  @media screen and (max-width: 54rem) {
    transform: translate(1%, 60%);
  }
`;
