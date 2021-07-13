import React, { FC } from "react";
import { Text } from "react-native";

import { Gradient } from "./styles";
import { theme } from "../../global/styles/theme";
import { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
};

const Background: FC<BackgroundProps> = ({ children }) => {
  const { primary, secondary } = theme.colors;

  return <Gradient colors={[primary, secondary]}>{children}</Gradient>;
};

export default Background;
