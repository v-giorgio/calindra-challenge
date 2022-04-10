import React from "react";
import { colors } from "../../assets/theme/theme";
import {
  FooterSection,
  SocialMediaIconItem,
  SocialMediaIcons,
  SocialMediaSection,
  SocialMediaTitle,
  AddressText,
  AddressSection,
  SocialMediaImage,
} from "./styles";

function Footer() {
  return (
    <FooterSection style={{ color: colors.primaryText }}>
      <SocialMediaSection>
        <SocialMediaTitle>Follow Us</SocialMediaTitle>
        <SocialMediaIcons>
          <SocialMediaIconItem>
            <SocialMediaImage
              src={require("../../assets/img/youtube-icon.png")}
              alt="Youtube"
            />
          </SocialMediaIconItem>
          <SocialMediaIconItem>
            <SocialMediaImage
              src={require("../../assets/img/facebook-icon.png")}
              alt="Facebook"
            />
          </SocialMediaIconItem>
          <SocialMediaIconItem>
            <SocialMediaImage
              src={require("../../assets/img/twitter-icon.png")}
              alt="Twitter"
            />
          </SocialMediaIconItem>
        </SocialMediaIcons>
      </SocialMediaSection>
      <AddressSection>
        <SocialMediaTitle>Contact</SocialMediaTitle>
        <AddressText>
          2490 Leisure Lane
          <br />
          San Luis Obispo
          <br />
          California
        </AddressText>
      </AddressSection>
    </FooterSection>
  );
}

export default Footer;
