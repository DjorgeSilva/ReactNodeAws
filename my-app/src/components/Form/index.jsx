import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { EMPTY_STRING } from "../../constants";
import CustomInput from "../CustomInput";
import { Button, FormContainer, SubTitle } from "./styles";
import { onMountUser } from "./useForm";

export const Form = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((store) => store.userStore.selectedUser);

  const [name, setName] = useState(EMPTY_STRING);
  const [job, setJob] = useState(EMPTY_STRING);
  const [age, setAge] = useState(EMPTY_STRING);
  const [email, setEmail] = useState(EMPTY_STRING);

  useEffect(() => {
    setName(selectedUser?.name ?? EMPTY_STRING);
    setJob(selectedUser?.job ?? EMPTY_STRING);
    setAge(selectedUser?.age ?? EMPTY_STRING);
    setEmail(selectedUser?.email ?? EMPTY_STRING);
  }, [selectedUser]);

  const onSubmit = async (event) => {
    event.preventDefault();
    onMountUser(
      selectedUser,
      {
        id: selectedUser ? selectedUser.id : uuidv4(),
        name,
        age,
        job,
        email,
      },
      dispatch
    );
  };

  return (
    <FormContainer>
      <SubTitle>Cadastre um novo usuário</SubTitle>
      <CustomInput onChange={setName} name="Nome" type="text" value={name} />
      <CustomInput onChange={setAge} name="Idade" type="number" value={age} />
      <CustomInput onChange={setJob} name="Cargo" type="text" value={job} />
      <CustomInput
        onChange={setEmail}
        name="Email"
        type="email"
        value={email}
      />
      <Button onClick={onSubmit}>
        {selectedUser ? "Atualizar" : "Adicionar"}
      </Button>
    </FormContainer>
  );
};
