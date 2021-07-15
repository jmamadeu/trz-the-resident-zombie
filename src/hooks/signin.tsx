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

type People = {
  id: string;
  name: string;
  age: number;
  gender: string;
  lonlat: string;
  items: string;
  infected: boolean;
};

type SignInContextData = {
  people: People;
  setPeople: Function;
  loading: boolean;
  signIn: () => Promise<void>;
  getFromLocalStorage: () => Promise<void>;
};

type SignInProviderProps = {
  children: ReactNode;
};

export const SignInContext = createContext({} as SignInContextData);

const SignInProvider: FC<SignInProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState<People>({} as People);

  const signIn = useCallback(async () => {
    setLoading(true);
    // console.log(people);
    try {
      await api.post("/people", people).then(async ({ data }) => {
        console.log("SIGNIN", data);
        await AsyncStorage.setItem("people", JSON.stringify(data));
        setPeople(data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const getFromLocalStorage = useCallback(async () => {
    const storage = await AsyncStorage.getItem("people");

    if (storage) {
      const peopleLogged = (await JSON.parse(storage)) as People;
      setPeople(peopleLogged);
    }

    // console.log(storage);
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
