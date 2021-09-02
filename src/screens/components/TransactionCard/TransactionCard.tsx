import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./TransactionCard.styles";
import { TransactionCardProps } from "./TransactionCard.types";

const categoryIcons: { [key: string]: string } = {
  vendas: "dollar-sign",
};
const TransactionCard = (props: TransactionCardProps) => {
  const { transaction } = props;
  const { title, amount, category, date } = transaction;
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
      <Footer>
        <Category>
          <Icon name={categoryIcons[category.slugname]} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
