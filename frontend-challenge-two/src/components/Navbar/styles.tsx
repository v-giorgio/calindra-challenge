import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1050px) {
    text-align: center;
  }
`;

export const LogoText = styled.div`
  margin-left: 23px;
  line-height: 19px;
  font-size: 16.2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const LogoTextTitle = styled.h1`
  font-size: 41.2px;
  line-height: 48px;
  font-weight: bolder;
`;

export const LogoTextParagraph = styled.p`
  letter-spacing: 4.2px;
  text-align: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  text-transform: uppercase;
  font-size: 16.2px;
  line-height: 19px;
  letter-spacing: 4.2px;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding-left: 128px;

  @media (max-width: 850px) {
    padding: 10px;
  }

  &:hover {
    font-size: 18px;
    cursor: pointer;
    transition-duration: 0.3s;
  }

  &:not(:hover) {
    transition-duration: 0.3s;
  }
`;

export const DropdownButton = styled.button`
  border: none;
  padding: 10px;

  @media (min-width: 850px) {
    display: none;
  }
`;

export const ResponsiveNavList = styled.ul`
  position: absolute;
  padding: 20px 60px;
  border-radius: 0 0 20px 0;
  left: 0;
  top: 109px;
  list-style: none;
  line-height: 19px;
  letter-spacing: 4.2px;
`;
