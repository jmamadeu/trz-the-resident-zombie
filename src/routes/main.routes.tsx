import React, { FC, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Register } from "../screens";

const { Navigator, Screen } = createStackNavigator();

interface Local {
  id: string;
}

const Main: FC = () => {
  return (
    <Navigator
      headerMode='none'
      initialRouteName='Register'
      screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}>
      <Screen name='Register' component={Register} />
    </Navigator>
  );
};
export { Main };
