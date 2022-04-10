import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  text-align: justify;
  flex-wrap: wrap;
`;

export const ResultSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 350px;
  margin: 2.5% 5%;
  height: 450px;
  padding-bottom: 2.5%;
  box-shadow: 0 0 0.5rem #f80132;

  &:hover {
    box-shadow: 0 0 0.8rem #f80132;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  &:not(:hover) {
    transition-duration: 0.4s;
  }

  @media (max-width: 1200px) {
    margin-top: 15px;
    text-align: center;
    width: 100%;
    padding: 10px;
    margin-left: 0;
  }
`;

export const ResultTitle = styled.h1`
  font-size: 32px;
  text-align: center;
  padding: 20px;
`;

export const ResultParagraph = styled.p`
  padding: 20px;
  text-align: center;
  font-size: 20px;
`;
