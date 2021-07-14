import React, { FC } from "react";
import { Image } from "react-native";
import { images } from "../../constants";
import { ListReportPeopleProps } from "./listReportPeople.types";
import {
  Container,
  SurvivorInformation,
  Name,
  SurvivorDescription,
  StatusDescription,
  StatusIndictior,
} from "./styles";

const ListReportPeople: FC<ListReportPeopleProps> = ({
  infected,
  name,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <SurvivorInformation>
        <Image source={infected ? images.Infected : images.NonInfected} />
        <SurvivorDescription>
          <Name>{name}</Name>
          <StatusDescription>
            {infected ? "Infected" : "Survivor"}
          </StatusDescription>
        </SurvivorDescription>
      </SurvivorInformation>
      <StatusIndictior infectedStatus={infected}></StatusIndictior>
    </Container>
  );
};

export default ListReportPeople;
