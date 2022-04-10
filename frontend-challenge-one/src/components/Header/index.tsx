import React from "react";
import { colors } from "../../assets/theme/theme";
import { NavSection, TextSection } from "./styles";

function Header() {
  return (
    <NavSection style={{ backgroundColor: colors.primary }}>
      <TextSection style={{ color: colors.light }}>
        Americanas - Consulta
      </TextSection>
    </NavSection>
  );
}

export default Header;
