import axios from "axios";

const BASE_URL = "https://proj16-shortly-back.herokuapp.com";

function createHeaders() {
  const token = JSON.parse(localStorage.getItem("shortly")).token;

  const config = {
    headers: {
      Authorization: `Bearer 11a3dd13-9d15-4a80-8dac-e6882d236985`,
    },
  };

  return config;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);

  return promise;
}

function getRanking() {
  const promise = axios.get(`${BASE_URL}/ranking`);

  return promise;
}

function getMyUrls() {
  const config = createHeaders();

  const promise = axios.get(`${BASE_URL}/users/me`, config);

  return promise;
}

function postUrl(body) {
  const config = createHeaders();

  const promise = axios.post(`${BASE_URL}/urls/shorten`, body, config);

  return promise;
}

function deleteUrl(id) {
  const config = createHeaders();

  const promise = axios.delete(`${BASE_URL}/urls/${id}`, config);

  return promise;
}

function redirectLink(shortUrl) {
  const promise = axios.get(
    `https://proj16-shortly-back.herokuapp.com/urls/open/${shortUrl}`
  );
}

export {
  postSignUp,
  postSignIn,
  getRanking,
  getMyUrls,
  postUrl,
  deleteUrl,
  redirectLink,
};
