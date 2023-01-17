import { HTTP_BACKEND_URL } from "../../config";
import { ICredentials } from "../../store/auth/types";

const getAuthorizationHeader = (credentials: ICredentials) => {
  const base64 = btoa(`${credentials.username}:${credentials.password}`);
  return `Basic ${base64}`;
};

const createGame = async (credentials?: ICredentials) => {
  const headers: { authorization?: string } = {};

  if (credentials) {
    headers.authorization = getAuthorizationHeader(credentials);
  }

  const response = await fetch(`${HTTP_BACKEND_URL}/games`, { method: "post", headers });
  const json = await response.json();
  return json.game_id;
};

export { createGame };
