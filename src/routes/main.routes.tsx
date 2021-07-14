import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Register, Home } from "../screens";
import ContactList from "../screens/ContactList";

const { Navigator, Screen } = createStackNavigator();

export const MainRoutes: FC = () => {
  return (
    <Navigator
      headerMode='none'
      initialRouteName='Register'
      screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}>
      <Screen name='Register' component={Register} />
      <Screen name='Home' component={Home} />
      <Screen name='ContactList' component={ContactList} />
    </Navigator>
  );
};
