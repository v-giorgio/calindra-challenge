import React from "react";

import { ReactComponent as MainRuler } from "../../assets/img/main-ruler.svg";
import { colors } from "../../assets/theme/theme";
import { MainContainer, MainTitle } from "./styles";

function MainSection() {
  return (
    <MainContainer>
      <MainTitle style={{ color: colors.primaryText }}>
        Measuring everything
      </MainTitle>
      <MainRuler />
    </MainContainer>
  );
}

export default MainSection;
