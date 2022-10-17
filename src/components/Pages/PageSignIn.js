import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignIn } from "../../services/shortly";
import { Input, Button } from "../../common";
import Header from "../Header/Header";
import styled from "styled-components";

export default function PageSignIn() {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const body = {
    email,
    password,
  };

  function joinSignIn(event) {
    event.preventDefault();

    postSignIn(body)
      .catch(() => {
        alert("Email ou senha incorreta!");
        setEmail("");
        setPassword("");
      })
      .then((response) => {
        localStorage.setItem(
          "shortly",
          JSON.stringify({
            token: response.data.token,
          })
        );
        alert("Login efetuado com sucesso!");
        navigate("/welcome");
      });
  }

  return (
    <>
      <Header login />

      <LoginContainer onSubmit={joinSignIn}>
        <Input
          placeholder="E-mail"
          value={email}
          type="email"
          pattern="[a-z0-9._%+-]+@[a-zLink, 0-9.-]+\.[a-z]{2,4}$"
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

        <Button>Entrar</Button>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
