import React, { FC } from "react";
import { ButtonProps } from "./button.types";
import { Container, Title } from "./styles";

const Button: FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
