import { getGameResults } from "../../api";
import { setView } from "../../store/router";
import { ViewEnum } from "../../store/router/types";
import { StateType } from "../../store/types";
import { sleep } from "../../utils";
import AnimatedView from "../shared/AnimatedView";
import GameResults from "./GameResults";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TIMEOUT = 3000;

interface IGameDetails {
  score: number;
}

const GameOverView: FC = () => {
  const dispatch = useDispatch();
  const gameId = useSelector((state: StateType) => state.game.id);
  const [results, setResults] = useState<IGameDetails | null>(null);

  useEffect(() => {
    if (!gameId) return redirect();

    let timeout: ReturnType<typeof setTimeout>;

    Promise.all([getGameResults(gameId), sleep(2000)]).then((responses) => {
      setResults(responses[0]);
      timeout = setTimeout(redirect, TIMEOUT);
    });

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const redirect = () => {
    dispatch(setView(ViewEnum.MAIN));
  };

  return (
    <AnimatedView className="grow flex flex-col justify-center">
      <div className="mx-auto max-w-[390px] w-[390px] px-4 flex flex-col space-y-12">
        <h1 className="text-center text-3xl text-yellow-400 text-pixel">
          Game Over!
        </h1>
        {!!results && <GameResults score={results.score} />}
      </div>
    </AnimatedView>
  );
};

export default GameOverView;
