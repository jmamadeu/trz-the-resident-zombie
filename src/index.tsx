import React, { FC } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { StatusBar } from "react-native";
import {
  useFonts,
  Rajdhani_500Medium,
  Rajdhani_700Bold,
  Rajdhani_600SemiBold,
} from "@expo-google-fonts/rajdhani";
import { Routes } from "./routes";
import { SignInProvider } from "./hooks/signin";

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    rajdhani_700: Rajdhani_700Bold,
    rajdhani_500: Rajdhani_500Medium,
    rajdhani_600: Rajdhani_600SemiBold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <SignInProvider>
        <Routes />
      </SignInProvider>
    </>
  );
};

export default App;
