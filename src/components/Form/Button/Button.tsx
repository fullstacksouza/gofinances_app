import React from "react";
import { Container, Title } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const { title, ...rest } = props;
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
