import { TouchableOpacityProps } from "react-native";
export type ListReportPeopleProps = TouchableOpacityProps & {
  infected?: boolean;
  name: string;
};
