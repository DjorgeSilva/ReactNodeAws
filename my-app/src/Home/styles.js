import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c2c2c2;
  overflow-x: hidden;
  overflow-y: hidden;

  @media (max-width: 630px) {
    height: fit-content;
    overflow-x: auto;
    overflow-y: auto;
  }
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;
