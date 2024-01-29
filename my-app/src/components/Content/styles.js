import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: #c4c4cc;
  border-left: 1px solid #fff;
  border-top: 1px solid #fff;

  overflow-y: auto;
`;

export const SubTitle = styled.h3``;

export const UserInfoWrapper = styled.div`
  width: 85%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;
`;

export const LabelWrapper = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Label = styled.p`
  margin: 0;
  margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;
