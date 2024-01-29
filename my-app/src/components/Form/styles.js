import styled from "styled-components";

export const FormContainer = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #c4c4cc;
  border-top: 1px solid #fff;

  @media (max-width: 630px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

export const SubTitle = styled.h3`
  text-align: center;
`;

export const Button = styled.button`
  width: 250px;
  margin-top: 18px;
`;
