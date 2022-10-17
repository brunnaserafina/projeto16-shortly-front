import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/shortly";
import { Input, Button } from "../../common";
import Header from "../Header/Header";
import styled from "styled-components";

export default function PageSignUp() {
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const body = {
    name,
    email,
    password,
    confirmPassword,
  };

  function joinSignUp(event) {
    event.preventDefault();

    postSignUp(body)
      .catch(() => {
        alert("Confira os dados!");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .then(() => {
        alert("Cadastro bem sucedido! Faça seu login.");
        navigate("/sign-in");
      });
  }

  return (
    <>
      <Header />

      <SignUpContainer onSubmit={joinSignUp}>
        <Input
          placeholder="Nome"
          value={name}
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          value={email}
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          value={password}
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirme a senha"
          value={confirmPassword}
          type="password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button>Criar Conta</Button>
      </SignUpContainer>
    </>
  );
}

const SignUpContainer = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
