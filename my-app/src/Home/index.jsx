import React, { useState } from "react";
import styled from "styled-components";
import CustomInput from "../components/CustomInput";
import { EMPTY_STRING } from "../constants";

export const Home = () => {
  const [name, setName] = useState(EMPTY_STRING);
  const [job, setJob] = useState(EMPTY_STRING);
  const [age, setAge] = useState(EMPTY_STRING);
  const [email, setEmail] = useState(EMPTY_STRING);

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      name !== EMPTY_STRING &&
      age !== EMPTY_STRING &&
      job !== EMPTY_STRING &&
      email !== EMPTY_STRING
    ) {
      const newUser = {
        name,
        age,
        job,
        email,
      };
      console.log("newUser: ", newUser);
    }
  };

  return (
    <Container>
      <Title>Olá, novo usuário!</Title>
      <Main>
        <Form>
          <SubTitle>Cadastre um novo usuário</SubTitle>
          <CustomInput onChange={setName} name="Nome" type="text" />
          <CustomInput onChange={setAge} name="Idade" type="number" />
          <CustomInput onChange={setJob} name="Cargo" type="text" />
          <CustomInput onChange={setEmail} name="Email" type="email" />
          <Button onClick={onSubmit}>Adicionar</Button>
        </Form>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #c2c2c2;
`;

const Title = styled.h2`
  text-align: center;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Form = styled.form`
  width: 50%;
  height: 100%;
  background-color: #c4c4cc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SubTitle = styled.h3``;

const Button = styled.button`
  width: 250px;
  margin-top: 18px;
`;
