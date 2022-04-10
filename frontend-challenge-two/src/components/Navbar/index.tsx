import React, { useState } from "react";
import { colors } from "../../assets/theme/theme";

import {
  Header,
  LogoSection,
  LogoText,
  LogoTextParagraph,
  LogoTextTitle,
  NavList,
  NavItem,
  ResponsiveNavList,
  DropdownButton,
} from "./styles";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Dropdown } from "../../assets/img/dropdown-button-icon.svg";

function Navbar() {
  const [navList, setNavList] = useState<boolean>(false);

  const handleDropdown = () => {
    setNavList(!navList);
  };

  return (
    <Header style={{ backgroundColor: colors.light }}>
      <DropdownButton
        style={{ backgroundColor: colors.light }}
        onClick={handleDropdown}
      >
        <Dropdown />
      </DropdownButton>
      {navList && (
        <ResponsiveNavList
          style={{ backgroundColor: colors.light, color: colors.secondaryText }}
        >
          <NavItem>About us</NavItem>
          <NavItem>Models</NavItem>
          <NavItem>Guarantee</NavItem>
        </ResponsiveNavList>
      )}
      <LogoSection>
        <Logo />
        <LogoText style={{ color: colors.secondaryText }}>
          <LogoTextTitle>zutterman</LogoTextTitle>
          <LogoTextParagraph>Measure Tapes</LogoTextParagraph>
        </LogoText>
      </LogoSection>
      <nav>
        <NavList style={{ color: colors.secondaryText }}>
          <NavItem>About us</NavItem>
          <NavItem>Models</NavItem>
          <NavItem>Guarantee</NavItem>
        </NavList>
      </nav>
    </Header>
  );
}

export default Navbar;
