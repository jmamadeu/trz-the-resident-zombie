import React, { FC } from "react";
import { theme } from "../../global/styles/theme";
import { Container, Title, Back } from "./styles";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header: FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Back onPress={() => navigation.goBack()}>
        <Feather name='chevron-left' color={theme.colors.white} size={24} />
      </Back>
      <Title>{title}</Title>
      <View></View>
    </Container>
  );
};

export default Header;
