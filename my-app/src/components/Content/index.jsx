import React, { useEffect, useState } from "react";
import { Container, Label, SubTitle, UserInfoWrapper } from "./styles";
import { onLoad } from "./useContent";
export const Content = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadContent = async () => {
      if (!users.length) {
        const data = await onLoad();
        if (data) {
          setUsers(data);
        }
      }
    };
    loadContent();
  }, []);

  return (
    <Container>
      <SubTitle>Cadastre um novo usuário</SubTitle>
      {users &&
        users.map((user, index) => {
          return (
            <UserInfoWrapper key={index}>
              <Label>Nome: {user.name}</Label>
              <Label>Idade: {user.age}</Label>
              <Label>Cargo: {user.job}</Label>
              <Label>email: {user.email}</Label>
            </UserInfoWrapper>
          );
        })}
    </Container>
  );
};
