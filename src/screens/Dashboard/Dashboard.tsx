import React from "react";
import HighlightCard from "../components/HighlightCard/HighlightCard";
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
} from "./Dashboard.styles";

const Dashboard = () => {
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
    </Container>
  );
};

export default Dashboard;
