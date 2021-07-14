import RNPickerSelect from "react-native-picker-select";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.white,
})`
  background-color: ${theme.colors.primary};
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.white};
  padding-left: 18px;
  padding-right: 18px;
  width: 274px;
  height: 56px;
  margin-bottom: 13px;
  border-radius: 8px;
`;
