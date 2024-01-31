import React from "react";
import { Commet } from "react-loading-indicators";
import { useDispatch, useSelector } from "react-redux";
import { onDeleteUser } from "../../controllers/onDeleteUser";
import { removeUserAction, setSelectedUserAction } from "../../store/actions";
import {
  ButtonWrapper,
  Container,
  Label,
  LabelWrapper,
  LoadingWrapper,
  SubTitle,
  UserInfoWrapper,
} from "./styles";

export const Content = () => {
  const dispatch = useDispatch();
  const userList = useSelector((store) => store.userStore.userList);

  return (
    <Container>
      <SubTitle>Lista de usuários</SubTitle>
      {userList.length ? (
        userList.map((user, index) => {
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
                  <button
                    onClick={() => {
                      onDeleteUser(user.id);
                      dispatch(
                        removeUserAction({
                          id: user.id,
                        })
                      );
                    }}
                  >
                    Deletar
                  </button>
                </div>
                <div>
                  <button
                    onClick={() =>
                      dispatch(setSelectedUserAction({ selectedUser: user }))
                    }
                  >
                    Atualizar
                  </button>
                </div>
              </ButtonWrapper>
            </UserInfoWrapper>
          );
        })
      ) : (
        <LoadingWrapper>
          <Commet color="#fff" size="medium" />
        </LoadingWrapper>
      )}
    </Container>
  );
};
