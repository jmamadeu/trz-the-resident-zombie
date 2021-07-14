import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

type OptionProps = {
  marginRight: boolean;
};

export const Header = styled.View`
  flex-direction: row;
  margin-top: ${getStatusBarHeight() + 26}px;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`;
export const PeopleInformation = styled.View`
  margin-left: 9px;
`;
export const Name = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title700};
  font-size: 24px;
`;
export const Intro = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title600};
  font-size: 17px;
`;
export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ListItem = styled.View`
  margin-top: 22px;
  margin-bottom: 17px;
`;
export const DynamicContent = styled.View`
  margin-top: 17px;
  align-items: center;
`;
export const Footer = styled.View.attrs({ marginVertical: 20 })`
  align-items: center;
  margin-bottom: 56px;
`;
export const OptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Option = styled.TouchableOpacity`
  width: 146px;
  height: 149px;
  align-items: center;
  border: 1px;
  border-radius: 8px;
  border-color: ${theme.colors.border};
  background-color: ${theme.colors.items};
  margin-right: ${({ marginRight }: OptionProps) => (marginRight ? "25px" : 0)};
  padding-top: 20px;
`;
export const Title = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title700};
  font-size: 22px;
`;
export const Description = styled.Text`
  color: ${theme.colors.white};
  text-align: center;
  font-family: ${theme.fonts.title500};
  font-size: 11px;
  margin-top: 25px;
`;
