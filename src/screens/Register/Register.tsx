import React, { useState } from "react";
import Button from "../../components/Form/Button/Button";
import Input from "../../components/Form/Input/Input";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton/TransactionTypeButton";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType,
} from "./Register.styles";

const Register = () => {
  const [transationType, setTransationType] = useState("");
  const handleSelectType = (type: string) => () => setTransationType(type);
  console.log("TYPÈ", transationType);
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
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;
