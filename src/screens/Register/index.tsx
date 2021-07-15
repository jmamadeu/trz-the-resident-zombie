import React, { FC, useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Image } from 'react-native';
import Background from '../../components/Background';
import Input from '../../components/Input';
import { images } from '../../constants';
import { Header, Form, Footer, Button, Title } from './styles';
import RNPickerSelect from 'react-native-picker-select';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Spinner from 'react-native-loading-spinner-overlay';
import { People, UserProperties, useSignIn } from '../../hooks/signin';

const Register: FC = () => {
  const { loading, signIn } = useSignIn();
  const [errorMsg, setErrorMsg] = useState('');
  const navigation = useNavigation();

  const [user, setUser] = useState<UserProperties>({
    name: '',
    age: 0,
    gender: '',
    items: '',
    lonlat: '',
  });

  const setCurrentLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({});
    setUser((oldValues) => ({
      ...oldValues,
      lonlat: `POINT (${location?.coords?.latitude}${' '}${
        location?.coords?.longitude
      })`,
      items: 'Fiji Water:1;Campbell Soup:1;First Aid Pouch:1;AK47:1',
    }));
  };

  const save = async () => {
    try {
      signIn(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setCurrentLocation();
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <Background>
        <Spinner
          visible={loading}
          textContent={'Creating your account...'}
          textStyle={{ color: '#FFF' }}
        />
        <ScrollView>
          <Header>
            <Image source={images.BigLogo} />
          </Header>
          <Form>
            <Input
              name='NAME'
              onChangeText={(text) =>
                setUser((oldValues) => ({ ...oldValues, name: text }))
              }
            />
            <Input
              name='AGE'
              keyboardType='numeric'
              maxLength={3}
              onChangeText={(text) =>
                setUser((oldValues) => ({ ...oldValues, age: parseInt(text) }))
              }
            />
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(text) =>
                setUser((oldValues) => ({ ...oldValues, gender: text }))
              }
              items={[
                { label: 'Male', value: 'M' },
                { label: 'Female', value: 'F' },
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
