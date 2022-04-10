import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 914px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 511px) {
    height: 511px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 82.2px;
  line-height: 96px;
  width: 348px;
  margin-right: 27px;

  @media (max-width: 850px) {
    font-size: 53.2px;
    line-height: 62px;
    width: 226px;
    margin-top: 141px;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
