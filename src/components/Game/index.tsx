import { FC, useEffect, useState } from "react";
import { initWebsocket } from "./helpers";
import Controls from "./Controls";
import Planet from "./Planet";
import Cat from "./Cat";
import Enemies from "./Enemies";
import { useDispatch } from "react-redux";
import { setCat } from "../../store/cat";
import { setEnemies } from "../../store/enemies";
import { setPlanet } from "../../store/planet";

interface IProps {
  gameId: string;
}

const Game: FC<IProps> = ({ gameId }) => {
  const dispatch = useDispatch();
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    setWebsocket(initWebsocket(gameId, handleEvent));
  }, []);

  const handleEvent = (event: MessageEvent) => {
    const { cat, enemies, planet } = JSON.parse(event.data);

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
        <Planet />
        <Cat />
        <Enemies />
      </div>
      <Controls websocket={websocket} />
    </>
  );
};

export default Game;
