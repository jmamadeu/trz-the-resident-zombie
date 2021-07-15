import React, { FC, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Register, Home } from "../screens";
import ContactList from "../screens/ContactList";
import { useSignIn } from "../hooks/signin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { Navigator, Screen } = createStackNavigator();

interface Local {
  id: string;
}

export const AuthRoute: FC = () => {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}>
      <Screen name='Home' component={Home} />
      <Screen name='ContactList' component={ContactList} />
    </Navigator>
  );
};
