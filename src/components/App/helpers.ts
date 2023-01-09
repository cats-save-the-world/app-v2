import { HTTP_BACKEND_URL } from "../../config";

const createGame = async () => {
  const response = await fetch(`${HTTP_BACKEND_URL}/games`, { method: "post" });
  const json = await response.json();
  return json.game_id;
};

export { createGame };
