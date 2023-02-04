import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame } from "../../api";
import { StateType } from "../../store/types";
import { setGameId } from "../../store/game";
import AnimatedView from "../shared/AnimatedView";
import Game from "./Game";

const GameView = () => {
  const dispatch = useDispatch();
  const credentials = useSelector((state: StateType) => state.auth.credentials);
  const gameId = useSelector((state: StateType) => state.game.id);

  useEffect(() => {
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
