import React, {
  FC,
  createContext,
  useState,
  useMemo,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { api } from "../services/rest.api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type People = {
  id: string;
  name: string;
  age: number;
  gender: string;
  lonlat: string;
  items: string;
  infected: boolean;
};

export interface UserProperties {
  name: string;
  age: number;
  gender: string;
  lonlat: string;
  items: string;
}

type SignInContextData = {
  people: People;
  setPeople: Function;
  loading: boolean;
  signIn: (user: UserProperties) => Promise<void>;
  getFromLocalStorage: () => Promise<void>;
};

type SignInProviderProps = {
  children: ReactNode;
};

export const SignInContext = createContext({} as SignInContextData);

const SignInProvider: FC<SignInProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState<People>({} as People);

  const signIn = useCallback(async (user: UserProperties) => {
    setLoading(true);
    try {
      await api.post("/people", user).then(async ({ data }) => {
        console.log("SIGNIN", data);
        await AsyncStorage.setItem("people", JSON.stringify(data));
        setPeople(data);
        setLoading(false);
      });
    } catch (error: any) {
      console.log(error?.message);
      setLoading(false);
    }
  }, []);

  const getFromLocalStorage = useCallback(async () => {
    const storage = await AsyncStorage.getItem("people");

    if (storage) {
      const peopleLogged = (await JSON.parse(storage)) as People;
      setPeople(peopleLogged);
    }
  }, []);

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  const memorizedProviderValues = useMemo(
    () => ({
      people,
      setPeople,
      loading,
      signIn,
      getFromLocalStorage,
    }),
    [loading, signIn, people, setPeople, getFromLocalStorage]
  );

  return (
    <SignInContext.Provider value={memorizedProviderValues}>
      {children}
    </SignInContext.Provider>
  );
};

const useSignIn = () => {
  const context = useContext(SignInContext);

  return context;
};

export { SignInProvider, useSignIn };
