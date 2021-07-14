import React, { FC } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { Image } from "react-native";
import Background from "../../components/Background";
import Input from "../../components/Input";
import { images } from "../../constants";
import { Header, Form, Footer, Button, Title } from "./styles";
import RNPickerSelect from "react-native-picker-select";
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

const Register: FC = () => {
  const navigation = useNavigation();

  const navigateTo = (routeName: string) => {
    navigation.navigate(routeName);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}>
      <Background>
        <ScrollView>
          <Header>
            <Image source={images.BigLogo} />
          </Header>
          <Form>
            <Input name='NAME' />
            <Input name='AGE' keyboardType='numeric' maxLength={3} />
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Male", value: "M" },
                { label: "Female", value: "F" },
              ]}
            />
          </Form>
          <Footer>
            <Button onPress={() => navigateTo("Home")}>
              <Title>JOIN</Title>
            </Button>
          </Footer>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
};

export default Register;
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: theme.colors.primary,
    fontFamily: theme.fonts.title700,
    color: theme.colors.white,
    paddingLeft: 18,
    paddingRight: 18,
    width: 274,
    height: 56,
    marginBottom: 13,
    marginLeft: 70,
    borderRadius: 8,
  },
  inputAndroid: {
    backgroundColor: theme.colors.primary,
    fontFamily: theme.fonts.title700,
    color: theme.colors.white,
    paddingLeft: 18,
    paddingRight: 18,
    width: 274,
    height: 56,
    marginBottom: 13,
    marginLeft: 70,
    borderRadius: 8,
  },
});
