import React from "react";

import { colors } from "../../assets/theme/theme";
import {
  MainContainer,
  MainTitle,
  SecondaryImage,
  TextSection,
  MainParagraph,
} from "./styles";

function ComplementSection() {
  return (
    <MainContainer
      style={{
        backgroundColor: colors.secondaryBackground,
        color: colors.light,
      }}
    >
      <TextSection>
        <MainTitle>We are Leader in Measure Tapes</MainTitle>
        <MainParagraph>
          There are 5x the circumference of planet earth in metric tapes.
        </MainParagraph>
      </TextSection>
      <SecondaryImage
        src={require("../../assets/img/complement-ruler-2.png")}
        alt="Imagem de uma fita métrica"
      />
    </MainContainer>
  );
}

export default ComplementSection;
