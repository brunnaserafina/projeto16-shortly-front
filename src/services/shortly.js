import axios from "axios";

const BASE_URL = "http://localhost:5000";

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

export { postSignUp, postSignIn, getRanking };
