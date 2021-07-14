import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

type StatusIndicatorProps = {
  infectedStatus: boolean;
};

export const Container = styled.TouchableOpacity`
  width: 321px;
  height: 68px;
  background-color: ${theme.colors.items};
  border: 1px;
  border-color: ${theme.colors.border};
  border-radius: 8px;
  flex-direction: row;
  padding: 17px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 23px;
`;
export const SurvivorInformation = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Name = styled.Text`
  color: ${theme.colors.white};
  font-size: 17px;
  font-family: ${theme.fonts.title700};
`;
export const SurvivorDescription = styled.View`
  margin-left: 17px;
`;
export const StatusDescription = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title500};
`;
export const StatusIndictior = styled.View`
  background-color: ${({ infectedStatus }: StatusIndicatorProps) =>
    infectedStatus ? theme.colors.infected : theme.colors.survivior};
  width: 14px;
  height: 14px;
  border-radius: 100px;
`;
