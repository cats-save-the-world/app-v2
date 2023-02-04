import { setCat } from "../../../store/cat";
import { setEnemies } from "../../../store/enemies";
import { setScore } from "../../../store/game";
import { setPlanet } from "../../../store/planet";
import { setView } from "../../../store/router";
import { ViewEnum } from "../../../store/router/types";
import { StateType } from "../../../store/types";
import Cat from "./Cat";
import Controls from "./Controls";
import Enemies from "./Enemies";
import EnemyScores from "./EnemyScores";
import Header from "./Header";
import Planet from "./Planet";
import { initWebsocket } from "./helpers";
import { GameEventTypeEnum, IGameEvent } from "./types";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IProps {
  gameId: string;
}

const TIMEOUT = 3000;

const Game: FC<IProps> = ({ gameId }) => {
  const dispatch = useDispatch();
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);
  const credentials = useSelector((state: StateType) => state.auth.credentials);

  useEffect(() => {
    setWebsocket(initWebsocket(gameId, handleEvent, credentials));
  }, []);

  const handleEvent = (event: MessageEvent) => {
    const gameEvent: IGameEvent = JSON.parse(event.data);

    if (gameEvent.type === GameEventTypeEnum.STATE) {
      handleState(gameEvent.payload);
    } else if (gameEvent.type === GameEventTypeEnum.GAME_OVER) {
      setTimeout(handleGameOver, TIMEOUT);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleState = (payload: any) => {
    const { cat, planet, enemies, score } = payload;
    dispatch(
      setCat({
        angle: cat.angle,
        status: cat.status,
        direction: cat.direction,
      })
    );
    dispatch(setPlanet(planet.damage));
    dispatch(setEnemies(enemies));
    dispatch(setScore(score));
  };

  const handleGameOver = () => {
    dispatch(setView(ViewEnum.GAME_OVER));
  };

  if (!websocket) return null;

  return (
    <>
      <Header />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Enemies />
        <Planet />
        <Cat />
      </div>
      <Controls websocket={websocket} />
      <EnemyScores />
    </>
  );
};

export default Game;
