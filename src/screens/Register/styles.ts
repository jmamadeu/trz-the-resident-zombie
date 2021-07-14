import RNPickerSelect from "react-native-picker-select";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View``;
export const Header = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 96px;
  margin-bottom: 25px;
`;
export const Form = styled.View`
  width: 100%;
  align-items: center;
`;
export const Footer = styled.View.attrs({
  marginVertical: 20,
})`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.survivior};
  border-radius: 8px;
  width: 274px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: ${theme.colors.white};
  font-size: 15px;
  font-family: ${theme.fonts.title700};
`;
