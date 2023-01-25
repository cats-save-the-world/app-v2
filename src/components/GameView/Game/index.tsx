import { FC, useEffect, useState } from "react";
import { initWebsocket } from "./helpers";
import Controls from "./Controls";
import Enemies from "./Enemies";
import { useDispatch, useSelector } from "react-redux";
import { setCat } from "../../../store/cat";
import { setEnemies } from "../../../store/enemies";
import { setPlanet } from "../../../store/planet";
import { GameEventTypes } from "./types";
import { StateType } from "../../../store/types";

interface IProps {
  gameId: string;
}

const Game: FC<IProps> = ({ gameId }) => {
  const dispatch = useDispatch();
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);
  const credentials = useSelector((state: StateType) => state.auth.credentials);

  useEffect(() => {
    setWebsocket(initWebsocket(gameId, handleEvent, credentials));
  }, []);

  const handleEvent = (event: MessageEvent) => {
    const { type, payload } = JSON.parse(event.data);

    if (type !== GameEventTypes.STATE) return;

    const { cat, planet, enemies } = payload;
    dispatch(
      setCat({
        angle: cat.angle,
        status: cat.status,
        direction: cat.direction,
      })
    );
    dispatch(setPlanet(planet));
    dispatch(setEnemies(enemies));
  };

  if (!websocket) return null;

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Enemies />
      </div>
      <Controls websocket={websocket} />
    </>
  );
};

export default Game;
