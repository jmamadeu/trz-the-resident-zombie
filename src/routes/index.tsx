import React, { FC, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useSignIn } from "../hooks/signin";
import { AuthRoute } from "./auth.routes";
import { Main } from "./main.routes";
import { Register } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export const Routes: FC = () => {
  const { people } = useSignIn();

  useEffect(() => {
    console.log("NEW PP", people);
  }, []);

  return (
    <NavigationContainer>
      {people?.id ? <AuthRoute /> : <Main /> } 
    </NavigationContainer>
  );
};
