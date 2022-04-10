import styled from "styled-components";

export const NavSection = styled.nav`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextSection = styled.h1`
  font-size: 46px;
  letter-spacing: 2px;
  text-align: center;
  box-shadow: 0 0 0.3rem #000;
  border-radius: 10px;
  padding: 1.2%;
  @media (max-width: 850px) {
    font-size: 32px;
    text-align: center;
    padding: 4%;
  }
`;
