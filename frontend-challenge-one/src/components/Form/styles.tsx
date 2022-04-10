import styled from "styled-components";
import { colors } from "../../assets/theme/theme";

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  text-align: justify;
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  text-align: justify;
`;

export const SectionTitle = styled.h1`
  font-size: 40px;

  @media (max-width: 850px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Styles = {
  inputLabel: {
    color: colors.primary,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    marginRight: 10,
    "@media (max-width: 850px)": {
      width: 120,
      height: 20,
      padding: 10,
      fontSize: 12,
    },
  },
  input: {
    backgroundColor: colors.light,
    width: "120%",
    fontSize: 14,
    fontWeight: "bold",
    height: 40,
    borderRadius: 10,
    padding: 25,
    marginTop: 20,
    marginBottom: 10,
    color: colors.primary,
    boxShadow: `0 0 0.2rem ${colors.primary}`,
  },
  button: {
    color: colors.light,
    width: 266,
    height: 61,
    borderRadius: 15,
    backgroundColor: colors.primary,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    letterSpacing: 3,
    marginBottom: 10,
    boxShadow: "0 0 0.5rem #000",
    transition: "all 0.3s",

    "&:hover": {
      backgroundColor: "#f0f0f0",
      color: colors.primary,
      boxShadow: `0 0 0.7rem ${colors.primary}`,
      fontSize: 22,
    },
    "@media (max-width: 750px)": {
      width: 150,
      height: 40,
      fontSize: 12,
    },
  },
  alert: {
    marginTop: 40,
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: 18,
  },
  requireSpan: {
    color: "red",
    fontWeight: "bold",
    fontSize: 12,
    alignSelf: "center",
  },
};
