import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 328px;
  height: 56px;
  background-color: ${theme.colors.survivior};
  border-radius: 8px;
`;
export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.white};
  font-size: 15px;
`;
