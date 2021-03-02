import axios from 'axios';

const APIGithub = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    'Content-Type': 'application/json',
  }
})

export const getDataFromGithub = async (handle) => {
  return await APIGithub
    .get(`users/${handle}`)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
