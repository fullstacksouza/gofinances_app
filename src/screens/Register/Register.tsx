import React, { useState } from "react";
import Button from "../../components/Form/Button/Button";
import Input from "../../components/Form/Input/Input";
import Select from "../../components/Form/Select/Select";
import { OptionType } from "../../components/Form/Select/Select.types";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton/TransactionTypeButton";
import { categories } from "../../utils/categories";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType,
} from "./Register.styles";

const formattedCategoriesOptions: OptionType[] = categories.map((category) => ({
  label: category.name,
  value: category.id,
  icon: category.icon,
}));

const Register = () => {
  const [transationType, setTransationType] = useState("");
  const [category, setCategory] = useState("");

  const handleSelectType = (type: string) => () => setTransationType(type);

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionsType>
            <TransactionTypeButton
              onPress={handleSelectType("C")}
              selected={transationType === "C"}
              title="Income"
              type="C"
            />
            <TransactionTypeButton
              onPress={handleSelectType("D")}
              selected={transationType === "D"}
              title="Outcome"
              type="D"
            />
          </TransactionsType>
          <Select
            onSelect={(option) => console.log(option)}
            options={formattedCategoriesOptions}
            title="Categoria"
          />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;
