import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View.attrs({
  paddingHorizontal: 24,
})`
  width: 100%;
  height: 104px;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.items};
`;
export const Title = styled.Text`
  font-family: ${theme.fonts.title500};
  font-size: 17px;
  color: ${theme.colors.white};
`;
export const Back = styled.TouchableOpacity``;
