import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { getMyUrls } from "../../services/shortly";
import shorts from "../../assets/images/shorts.svg";
import styled from "styled-components";

export default function Header({ login, welcome }) {
  const { user, setUser } = useContext(userContext);
  const token = JSON.parse(localStorage.getItem("shortly"))?.token;
  const navigate = useNavigate();

  function logout() {
    if (window.confirm("Tem certeza que deseja sair?")) {
      localStorage.removeItem("shortly");
      navigate("/");
    }
  }

  if (token) {
    getMyUrls()
      .catch((response) => console.log(response))
      .then((response) => {
        setUser(response.data.name);
      });
  }

  return (
    <>
      {token ? (
        <AcessContainer>
          <h5>Seja bem-vindo(a), {user}!</h5>
          <div>
            <Link to={`/welcome`}>
              <h6>Home</h6>
            </Link>

            <Link to={`/`}>
              <h6>Ranking</h6>
            </Link>

            <Link to={`/`}>
              <h6 onClick={logout}>Sair</h6>
            </Link>
          </div>
        </AcessContainer>
      ) : (
        <AcessContainerr>
          <Link to={`/sign-in`}>
            <Login login={login}>Entrar</Login>
          </Link>

          <Link to={`/sign-up`}>
            <SignUp login={login}>Cadastre-se</SignUp>
          </Link>
        </AcessContainerr>
      )}

      <Link to={`/`}>
        <LogoContainer>
          <span>Shortly</span>
          <img src={shorts} alt="shortly" />
        </LogoContainer>
      </Link>
    </>
  );
}

const AcessContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h6 {
    margin-left: 30px;
    font-weight: 400;
    color: #9c9c9c;
  }

  div {
    display: flex;
  }

  h5 {
    color: #5d9040;
  }
`;
const AcessContainerr = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  h6 {
    margin-left: 30px;
    font-weight: 400;
    color: #9c9c9c;
  }

  div {
    display: flex;
  }
`;

const Login = styled.h4`
  margin-left: 10px;
  font-weight: 400;
  color: ${(props) => (props.login ? "#5D9040" : "#9c9c9c")};
`;

const SignUp = styled.h4`
  margin-left: 10px;
  font-weight: 400;
  color: ${(props) => (props.login ? "#9c9c9c" : "#5D9040")};
`;

const LogoContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 110px;

  span {
    font-size: 64px;
    font-weight: 200;
    margin-right: 8px;
  }
`;
