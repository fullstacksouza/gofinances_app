import React from "react";
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
    </Container>
  );
};

export default Dashboard;
