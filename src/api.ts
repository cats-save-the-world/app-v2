import axios from "axios";
import { HTTP_BACKEND_URL } from "./config";

const api = axios.create({
  baseURL: HTTP_BACKEND_URL,
  timeout: 3000,
});

export const createUser = async (username: string, password: string) => {
  await api.post(`/auth/users`, {
    username,
    password,
  });
};

export const verify = async (username: string, password: string) => {
  await api.post(`/auth/verify`, null, {
    auth: {
      username,
      password,
    },
  });
};

export const createGame = async (username: string, password: string) => {
  const response = await api.post(`/games`, {
    auth: {
      username,
      password,
    },
  });
  const json = response.data;
  return json.game_id;
};
