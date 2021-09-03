import React from "react";
import { Container, Icon, Title } from "./TransactionTypeButton.styles";
import { TransactionTypeButtonProps } from "./TransactionTypeButton.types";

const icons = {
  C: "arrow-up-circle",
  D: "arrow-down-circle",
};
const TransactionTypeButton = (props: TransactionTypeButtonProps) => {
  const { title, type, selected, ...rest } = props;
  console.log(selected);
  return (
    <Container type={type} selected={selected} {...rest}>
      <Icon name={icons[type]} />
      <Title selected={selected}>{title}</Title>
    </Container>
  );
};

export default TransactionTypeButton;
