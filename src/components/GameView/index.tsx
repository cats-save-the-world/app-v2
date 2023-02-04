import { createGame } from "../../api";
import { resetEnemies } from "../../store/enemies";
import { resetGame, setGameId } from "../../store/game";
import { StateType } from "../../store/types";
import AnimatedView from "../shared/AnimatedView";
import Game from "./Game";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GameView = () => {
  const dispatch = useDispatch();
  const credentials = useSelector((state: StateType) => state.auth.credentials);
  const gameId = useSelector((state: StateType) => state.game.id);

  useEffect(() => {
    dispatch(resetGame());
    dispatch(resetEnemies());
    createGame(credentials).then((gameId: string) => {
      dispatch(setGameId(gameId));
    });
  }, []);

  return (
    <AnimatedView className="grow">
      {gameId !== null && <Game gameId={gameId} />}
    </AnimatedView>
  );
};

export default GameView;
