import { useEffect, useState } from "react";
import Game from "./Game";
import { useParams } from "react-router-dom";

const GameView = () => {
  const params = useParams();
  // const [gameId, setGameId] = useState<string | null>(null);

  // useEffect(() => {
  //   createGame().then((gameId: string) => {
  //     setGameId(gameId);
  //   });
  // }, []);

  // return <Layout>{!!gameId && <Game gameId={gameId} />}</Layout>;

  return <div>{params.gameId}</div>;
};

export default GameView;
