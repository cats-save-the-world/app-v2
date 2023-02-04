import { HTTP_BACKEND_URL } from "../config";
import { ICredentials } from "../store/auth/types";
import axios from "axios";

const api = axios.create({ baseURL: HTTP_BACKEND_URL });

export const createGame = async (credentials: ICredentials) => {
  const response = await api.post("/games", null, { auth: credentials });
  return response.data.game_id;
};

export const userExists = async (username: string) => {
  const response = await api.get(`/auth/users?username=${username}`);
  return response.data;
};

export const verify = async (username: string, password: string) => {
  await api.get("/auth/verify", {
    auth: { username, password },
  });
};

export const createUser = async (username: string, password: string) => {
  await api.post("/auth/users", { username, password });
};

export const getGameResults = async (gameId: string) => {
  const response = await api.get(`/games/${gameId}`);
  return response.data;
};
