import { WS_BACKEND_URL } from "../../../config";
import { ICredentials } from "../../../store/auth/types";
import { GameEventTypes } from "./types";

const initWebsocket = (
  gameId: string,
  onmessage: (event: MessageEvent) => void,
  credentials: ICredentials | null
) => {
  const websocket = new WebSocket(`${WS_BACKEND_URL}/games/${gameId}/events`);
  websocket.onmessage = onmessage;

  if (credentials) {
    websocket.onopen = () => {
      websocket.send(
        JSON.stringify({ type: GameEventTypes.AUTH, payload: credentials })
      );
    };
  }

  return websocket;
};

export { initWebsocket };
