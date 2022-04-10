import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  height: 226px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 151px;

  @media (max-width: 825px) {
    flex-wrap: wrap;
    height: 334px;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
`;

export const SocialMediaSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 323px;

  @media (max-width: 825px) {
    justify-content: center;
    align-items: center;
    margin-right: 100px;
  }

  @media (max-width: 490px) {
    margin-right: 0;
  }
`;

export const SocialMediaTitle = styled.h2`
  font-size: 27.2px;
  line-height: 32px;
`;

export const SocialMediaIcons = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const SocialMediaIconItem = styled.li`
  padding-right: 26px;
`;

export const SocialMediaImage = styled.img`
  border-radius: 30px;

  &:hover {
    box-shadow: 0 0 0.8rem #716565;
    cursor: pointer;
    transition-duration: 0.3s;
  }

  &:not(:hover) {
    transition-duration: 0.3s;
  }
`;

export const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 825px) {
    justify-content: center;
    align-items: center;
  }
`;

export const AddressText = styled.p`
  margin-top: 15px;
  font-size: 16.2px;
  line-height: 19px;
`;
