import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Content } from "../components/Content";
import { Form } from "../components/Form";
import { setUserListAction } from "../store/actions";
import { onLoadUsers } from "../utils";
import { Container, Main, Title } from "./styles";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadContent = async () => {
      const data = await onLoadUsers();
      if (data) {
        dispatch(
          setUserListAction({
            userList: data,
          })
        );
      }
    };
    loadContent();
  }, []);

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
