import React from "react";
import styled from "styled-components";
import { Content } from "../components/Content";
import { Form } from "../components/Form";

export const Home = () => {
  return (
    <Container>
      <Title>Olá, novo usuário!</Title>
      <Main>
        <Form />
        <Content />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c2c2c2;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Title = styled.h2`
  text-align: center;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
