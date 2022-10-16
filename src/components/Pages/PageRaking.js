import Header from "../Header/Header";
import trophy from "../../assets/images/trophy.svg";
import styled from "styled-components";

export default function PageRanking() {
  return (
    <>
      <Header login />

      <RankingContainer>
        <div>
          <img src={trophy} alt="trophy" />
          <span>Ranking</span>
        </div>

        <Ranking></Ranking>

        <span>Crie sua conta para usar nosso serviço!</span>
      </RankingContainer>
    </>
  );
}

const RankingContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 36px;
    font-weight: 700;
    margin-left: 8px;
  }
`;

const Ranking = styled.div`
  width: 60vw;
  height: 300px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 24px 24px 0px 0px;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  margin: 30px 0px;
`;
