import { useParams } from "react-router-dom";
import Game from "./Game";

const GameView = () => {
  const params = useParams();
  return params.gameId ? <Game gameId={params.gameId} /> : null;
};

export default GameView;
