import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Register } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const MainRoutes: FC = () => {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}>
      <Screen name='Register' component={Register} />
    </Navigator>
  );
};
