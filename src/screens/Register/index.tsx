import React, { FC, useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Image } from "react-native";
import Background from "../../components/Background";
import Input from "../../components/Input";
import { images } from "../../constants";
import { Header, Form, Footer, Button, Title } from "./styles";
import RNPickerSelect from "react-native-picker-select";
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Spinner from "react-native-loading-spinner-overlay";
import { useSignIn } from "../../hooks/signin";

const Register: FC = () => {
  const { people, setPeople, loading, signIn } = useSignIn();
  const [errorMsg, setErrorMsg] = useState("");
  const navigation = useNavigation();

  const setCurrentLocation = async () => {
    // console.log(Permissions);
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    setPeople({
      ...people,
      lonlat: `POINT (${location?.coords?.latitude}${" "}${
        location?.coords?.longitude
      })`,
      items: "Fiji Water:1;Campbell Soup:1;First Aid Pouch:1;AK47:1",
    });
  };

  const save = async () => {
    try {
      signIn();
      setTimeout(() => {
        navigation.navigate("Home");
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setCurrentLocation();
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}>
      <Background>
        <Spinner
          visible={loading}
          textContent={"Creating your account..."}
          textStyle={{ color: "#FFF" }}
        />
        <ScrollView>
          <Header>
            <Image source={images.BigLogo} />
          </Header>
          <Form>
            <Input
              name='NAME'
              onChangeText={(text) => setPeople({ ...people, name: text })}
            />
            <Input
              name='AGE'
              keyboardType='numeric'
              maxLength={3}
              onChangeText={(text) =>
                setPeople({ ...people, age: parseInt(text) })
              }
            />
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(text) => setPeople({ ...people, gender: text })}
              items={[
                { label: "Male", value: "M" },
                { label: "Female", value: "F" },
              ]}
            />
          </Form>
          <Footer>
            <Button onPress={save}>
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
