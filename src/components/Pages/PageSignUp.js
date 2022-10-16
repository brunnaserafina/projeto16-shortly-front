import Header from "../Header/Header";
import { Input, Button } from "../../common";
import styled from "styled-components";

export default function PageSignUp() {
  return (
    <>
      <Header />

      <SignUpContainer>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirme a senha" />

        <Button>Criar Conta</Button>
      </SignUpContainer>
    </>
  );
}

const SignUpContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
