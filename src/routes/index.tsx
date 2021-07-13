import React, { FC } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { MainRoutes } from "./main.routes";
import { Text } from "react-native";

export const Routes: FC = () => {
  return (
    <>
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </>
  );
};
