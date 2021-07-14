import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Content = styled.View`
  flex: 1;
  margin-top: 10px;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${theme.fonts.title500};
  font-size: 12px;
  color: ${theme.colors.white};
  margin-left: 17px;
  margin-top: 24px;
`;
