import React, { FC, useState } from "react";
import { FlatList } from "react-native";
import { Container, Title, Quantity, Points } from "./styles";

interface Items {
  location?: string;
  quantity: number;
  item: { name: string; points: number };
}

const ListItems: FC = () => {
  const [data, setData] = useState<Items[]>([
    {
      quantity: 1,
      item: { name: "Água Fiji", points: 14 },
    },
    {
      quantity: 1,
      item: { name: "Sopa Campbell", points: 12 },
    },
    {
      quantity: 1,
      item: { name: "Bolsa de primeiros socorros", points: 10 },
    },
    {
      quantity: 1,
      item: { name: "AK47", points: 8 },
    },
  ]);

  const renderItem = ({ item }: { item: Items }) => {
    return (
      <Container>
        <Title>{item?.item?.name}</Title>
        <Quantity>{item?.quantity}</Quantity>
        <Points>POINTS: {item?.item?.points}</Points>
      </Container>
    );
  };

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: Items) => item?.location}
      />
    </>
  );
};

export default ListItems;
