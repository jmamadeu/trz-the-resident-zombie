import React, { FC } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { MainRoutes } from "./main.routes";

export const Routes: FC = () => {
  return (
    <>
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </>
  );
};
