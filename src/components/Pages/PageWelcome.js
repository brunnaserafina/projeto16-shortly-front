import Header from "../Header/Header";
import { React, useState, useEffect } from "react";
import { postUrl, deleteUrl } from "../../services/shortly";
import { Input, Button } from "../../common";
import trash from "../../assets/images/trash.svg";
import { getMyUrls } from "../../services/shortly";
import styled from "styled-components";

export default function PageWelcome() {
  const [urls, setUrls] = useState([]);
  const [shortUrl, setShortUrl] = useState("");
  const [render, setRender] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    postUrl({ url: shortUrl })
      .catch((response) => {
        console.log(response);
        alert("Confira se a url é valida!");
      })
      .then(() => {
        setRender(!render);
      });
  }

  useEffect(() => {
    getMyUrls()
      .catch((response) => console.log(response))
      .then((response) => {
        setUrls(response.data.shortenedUrls);
        setShortUrl("");
      });
  }, [render]);

  return (
    <>
      <Header welcome />

      <WelcomeContainer>
        <ShortLink onSubmit={handleSubmit}>
          <Input
            placeholder="Links que cabem no bolso"
            value={shortUrl}
            type="url"
            required
            onChange={(e) => setShortUrl(e.target.value)}
          />
          <Button>Encurtar link</Button>
        </ShortLink>

        {urls.map((link) => (
          <UrlElements
            key={link.id}
            link={link}
            setRender={setRender}
            render={render}
          />
        ))}
      </WelcomeContainer>
    </>
  );
}

function UrlElements({ link, setRender, render }) {
  const { id, shortUrl, url, visitCount } = link;

  function deleteLink() {
    if (window.confirm("Tem certeza que deseja deletar o link?")) {
      deleteUrl(id)
        .catch((response) => {
          console.log(response);
          alert("Não foi possível excluir o link");
        })
        .then(() => {
          setRender(!render);
        });
    }
  }

  return (
    <>
      <LinksContainer>
        <Links>
          <div>{url} </div>
          <span>{shortUrl}</span>
          <span>Quantidade de visitantes: {visitCount}</span>
        </Links>
        <Delete onClick={deleteLink}>
          <img src={trash} />
        </Delete>
      </LinksContainer>
    </>
  );
}

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ShortLink = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.div`
  width: 100%;
  height: 60px;
  background-color: #80cc74;
  color: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 12px 0px 0px 12px;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-right: 70px;

  div {
    width: 40%;
  }
`;

const Delete = styled.div`
  width: 130px;
  height: 60px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 0px 12px 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LinksContainer = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  height: 60px;
`;
