import React from "react";
import { Container } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input = (props: InputProps) => {
  return <Container {...props}></Container>;
};

export default Input;
