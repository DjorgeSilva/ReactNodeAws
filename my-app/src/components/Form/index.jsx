import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EMPTY_STRING } from "../../constants";
import CustomInput from "../CustomInput";
import { Button, FormContainer, SubTitle } from "./styles";
import { onSaveNewUser } from "./useForm";

export const Form = () => {
  const [name, setName] = useState(EMPTY_STRING);
  const [job, setJob] = useState(EMPTY_STRING);
  const [age, setAge] = useState(EMPTY_STRING);
  const [email, setEmail] = useState(EMPTY_STRING);

  const onSubmit = async (event) => {
    event.preventDefault();
    await onSaveNewUser({
      id: uuidv4(),
      name,
      age,
      job,
      email,
    });
  };

  return (
    <FormContainer>
      <SubTitle>Cadastre um novo usuário</SubTitle>
      <CustomInput onChange={setName} name="Nome" type="text" />
      <CustomInput onChange={setAge} name="Idade" type="number" />
      <CustomInput onChange={setJob} name="Cargo" type="text" />
      <CustomInput onChange={setEmail} name="Email" type="email" />
      <Button onClick={onSubmit}>Adicionar</Button>
    </FormContainer>
  );
};