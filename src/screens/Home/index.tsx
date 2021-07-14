import { useNavigation } from "@react-navigation/native";
import React, { FC, useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Image } from "react-native";
import Background from "../../components/Background";
import Button from "../../components/Button";
import ListItems from "../../components/ListItems";
import ListReportPeople from "../../components/ListReportPeople";
import { StatusIndictior } from "../../components/ListReportPeople/styles";
import { images } from "../../constants";
import { api } from "../../services/rest.api";
import {
  Header,
  PeopleInformation,
  Name,
  Intro,
  Left,
  ListItem,
  DynamicContent,
  Footer,
  OptionsContainer,
  Option,
  Title,
  Description,
} from "./styles";

interface People {
  name: string;
  infected: boolean;
  location: string;
}

const Home: FC = () => {
  const [people, setPeople] = useState<People[]>([]);
  const navigation = useNavigation();

  const getPeople = async () => {
    try {
      await api
        .get("/people")
        .then((peopleResponse) => setPeople(peopleResponse.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  const markAsInfected = async (personId: string) => {
    try {
      await api
        .post(`/people/${personId}/report_infection.json`, {
          infected: "41974fad-1ff3-45e9-9a8b-afab94a372ec",
        })
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  };

  const navigateTo = (routeName: string) => {
    navigation.navigate(routeName);
  };

  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <Left>
            <Image source={images.HeaderLogo} />
            <PeopleInformation>
              <Name>Domingos,</Name>
              <Intro>Your survival starts here.</Intro>
            </PeopleInformation>
          </Left>
          <StatusIndictior />
        </Header>
        <ListItem>
          <ListItems />
        </ListItem>
        <OptionsContainer>
          <Option
            marginRight
            onPress={() => navigateTo("ContactList")}
            title='Negociate'>
            <Image source={images.People} />
            <Title>Contacts</Title>
            <Description>
              You can negotiate and see inofected and suvivor here.
            </Description>
          </Option>
          <Option>
            <Image source={images.Report} />
            <Title>Report</Title>
            <Description>
              You can see the statistics of everything here.
            </Description>
          </Option>
        </OptionsContainer>
        <DynamicContent>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={people}
            initialNumToRender={3}
            contentContainerStyle={{ height: 270 }}
            renderItem={({ item }) => (
              <ListReportPeople
                name={item?.name}
                infected={item?.infected}
                onPress={() => {
                  // markAsInfected(item?.location.substring(53)),
                  console.log(item);
                }}
              />
            )}
            keyExtractor={(item: People) => item?.location}
          />
        </DynamicContent>
        <Footer>
          <Button onPress={() => navigateTo("ContactList")} title='Negociate' />
        </Footer>
      </ScrollView>
    </Background>
  );
};

export default Home;
