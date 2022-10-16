import { Link } from "react-router-dom";
import styled from "styled-components";

function renderError() {
  localStorage.clear("shortly");

  return (
    <ErrorContainer>
      <h3>VOCÊ NÃO É AUTORIZADO!</h3>
      <Link to={`/sign-in`}>
        <p>Faça login para continuar acessando</p>
      </Link>
    </ErrorContainer>
  );
}

export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("shortly"));

  if (!auth) {
    return renderError();
  }

  return <>{children}</>;
}

const ErrorContainer = styled.div`
  height: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 20px;
  }

  a {
    text-decoration: underline;
    color: #5d9040;
  }
`;
