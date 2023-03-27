import axios from "axios";

const BASE_URL = "https://shortly-db-7snf.onrender.com";

function createHeaders() {
  const token = JSON.parse(localStorage.getItem("shortly")).token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
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

export { postSignUp, postSignIn, getRanking, getMyUrls, postUrl, deleteUrl };
