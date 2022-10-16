import Header from "../Header/Header";
import { Input, Button } from "../../common";
import styled from "styled-components";

export default function PageSignIn() {
  return (
    <>
      <Header login />

      <LoginContainer>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />

        <Button>Entrar</Button>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
