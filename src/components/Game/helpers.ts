import { WS_BACKEND_URL } from "../../config";

const initWebsocket = (
  gameId: string,
  onmessage: (event: MessageEvent) => void
) => {
  const websocket = new WebSocket(`${WS_BACKEND_URL}/games/${gameId}/events`);
  websocket.onmessage = onmessage;
  return websocket;
};

export { initWebsocket };
