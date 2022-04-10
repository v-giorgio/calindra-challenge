import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 1024px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 950px) {
    height: 568px;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 50%;
  width: 493px;
  margin-left: 159px;
  margin-top: 76px;
`;

export const MainTitle = styled.h1`
  font-size: 69.2px;
  line-height: 81px;
  width: 484px;
  margin-bottom: 26px;

  @media (max-width: 950px) {
    font-size: 41.2px;
    line-height: 48px;
    width: 288px;
    margin-bottom: 22px;
  }
`;

export const MainParagraph = styled.p`
  font-size: 48.2px;
  line-height: 56px;
  width: 493px;
  font-weight: 100;

  @media (max-width: 950px) {
    font-size: 26.2px;
    line-height: 31px;
    width: 293px;
  }
`;

export const SecondaryImage = styled.img`
  @media (min-width: 950px) {
    position: absolute;
    width: 1038px;
    height: 689px;
    right: 0;
    top: 1107px;
  }

  @media (max-width: 950px) {
    width: 259px;
    height: 172px;
  }
`;
