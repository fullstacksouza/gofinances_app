import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import HighlightCard from "../components/HighlightCard/HighlightCard";
import TransactionCard from "../components/TransactionCard/TransactionCard";
import { Transaction } from "../components/TransactionCard/TransactionCard.types";
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  UserWrapper,
  PowerIcon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./Dashboard.styles";

const Dashboard = () => {
  const transactions: Transaction[] = [
    {
      id: "3213",
      title: "Desenvolvimento de sites",
      date: "22/08/2021",
      amount: "R$ 15.232,00",
      type: "C",
      category: { name: "Vendas", slugname: "vendas" },
    },
    {
      id: "23r",
      title: "Pastelaria",
      date: "22/08/2021",
      amount: "R$ 15.232,00",
      type: "D",
      category: { name: "Alimentação", slugname: "vendas" },
    },
    {
      id: "2367r",
      title: "Restituição IRPJ",
      date: "22/08/2021",
      amount: "R$ 15.232,00",
      type: "C",
      category: { name: "Vendas", slugname: "vendas" },
    },
    {
      id: "23323r",
      title: "Forever 21",
      date: "22/08/2021",
      amount: "R$ 15.232,00",
      type: "D",
      category: { name: "Vestuário", slugname: "compras" },
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
              }}
            />
            <User>
              <UserGretting>Olá,</UserGretting>
              <UserName>Matheus</UserName>
            </User>
          </UserInfo>
          <PowerIcon />
        </UserWrapper>
      </Header>

      <HighlightCards
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 24 }}
      >
        <HighlightCard
          title="Entrada"
          amount="R$ 17.2382,00"
          lastTransition="Ultima transação 8 de aghosto"
          type="C"
        />
        <HighlightCard
          title="Entrada"
          amount="R$ 17.2382,00"
          lastTransition="Ultima transação 8 de aghosto"
          type="D"
        />
        <HighlightCard
          title="Entrada"
          amount="R$ 17.2382,00"
          lastTransition="Ultima transação 8 de aghosto"
          type="T"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          contentContainerStyle={{
            paddingBottom: getBottomSpace() || 20,
            marginTop: 16,
          }}
          showsVerticalScrollIndicator={false}
          data={transactions}
          renderItem={({ item }) => <TransactionCard transaction={item} />}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
