import React, { FC } from "react";
import { InputTextProps } from "./input.types";
import { InputText } from "./styles";

const Input: FC<InputTextProps> = ({ name, ...rest }) => (
  <InputText placeholder={name} {...rest} />
);

export default Input;
