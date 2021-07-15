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
  const { people } = useSignIn();

  const [localStorageData, setLocalStorageData] = useState<Local>({} as Local);

  async function getDataLocal() {
    const localstorage = await AsyncStorage.getItem("people");
    if (localstorage) {
      const peopleLogged = (await JSON.parse(localstorage)) as any;
      console.log("ll", peopleLogged);
      setLocalStorageData(peopleLogged);
    }
  }

  useEffect(() => {
    getDataLocal();
  }, []);

  const userScreen = {
    Home,
    ContactList,
  };
  const authScreen = {
    Register,
  };

  return (
    <Navigator
      headerMode='none'
      screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}>
      {Object.entries({
        ...(localStorageData?.id ? userScreen.Home : authScreen?.Register),
      })}

      <Screen name='Home' component={Home} />
      <Screen name='ContactList' component={ContactList} />
    </Navigator>
  );
};
