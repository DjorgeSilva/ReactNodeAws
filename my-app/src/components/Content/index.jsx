import React, { useEffect, useState } from "react";
import { onDeleteUser } from "../../controllers/onDeleteUser";
import {
  ButtonWrapper,
  Container,
  Label,
  LabelWrapper,
  SubTitle,
  UserInfoWrapper,
} from "./styles";
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
              <LabelWrapper>
                <Label>Nome: {user.name}</Label>
                <Label>Idade: {user.age}</Label>
                <Label>Cargo: {user.job}</Label>
                <Label>email: {user.email}</Label>
              </LabelWrapper>
              <ButtonWrapper>
                <div>
                  <button onClick={() => onDeleteUser(user.id)}>Deletar</button>
                </div>
                <div>
                  <button>Update</button>
                </div>
              </ButtonWrapper>
            </UserInfoWrapper>
          );
        })}
    </Container>
  );
};
