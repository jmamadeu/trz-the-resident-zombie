import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View.attrs({ marginHorizontal: 5 })`
  border: 1px;
  width: 170px;
  height: 68px;
  border-radius: 8px;
  border-color: ${theme.colors.border};
  background-color: ${theme.colors.items};
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 13px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title600};
  text-align: center;
`;
export const Quantity = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title500};
  font-size: 13px;
`;
export const Points = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title600};
  font-size: 13px;
`;
