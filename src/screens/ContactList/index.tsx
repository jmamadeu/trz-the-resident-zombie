import React, { FC, useEffect, useState } from "react";
import { FlatList } from "react-native";
import Background from "../../components/Background";
import Header from "../../components/Header";
import ListReportPeople from "../../components/ListReportPeople";
import { api } from "../../services/rest.api";
import { Content, Title } from "./styles";

interface People {
  name: string;
  infected: boolean;
  location: string;
}

const ContactList: FC = () => {
  const [people, setPeople] = useState<People[]>([]);

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

  return (
    <Background>
      <Header title='Contact List' />
      <Title>Click on one survivor to flag as infected.</Title>
      <Content>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={people}
          initialNumToRender={3}
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
      </Content>
    </Background>
  );
};

export default ContactList;
