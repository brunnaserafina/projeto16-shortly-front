import shorts from "../../assets/images/shorts.svg";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <AcessContainer>
        <h6>Entrar</h6>
        <h6>Cadastre-se</h6>
      </AcessContainer>

      <LogoContainer>
        <span>Shortly</span>
        <img src={shorts} alt="shortly" />
      </LogoContainer>
    </>
  );
}

const AcessContainer = styled.div`
  width: 85vw;
  display: flex;
  justify-content: flex-end;

  h6 {
    margin-left: 10px;
    font-weight: 400;
    color: #9c9c9c;
  }
`;

const LogoContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 64px;
    font-weight: 200;
    margin-right: 8px;
  }
`;
