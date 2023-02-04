import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setView } from "../../store/router";
import { ViewEnum } from "../../store/router/types";
import AnimatedView from "../shared/AnimatedView";

const TIMEOUT = 3000;

const GameOverView: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(redirect, TIMEOUT);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const redirect = () => {
    dispatch(setView(ViewEnum.MAIN));
  };

  return (
    <AnimatedView className="grow flex flex-col justify-center">
      <div className="mx-auto max-w-[390px] w-[390px] px-4 flex flex-col">
        <h1 className="text-center text-3xl text-yellow-400 text-pixel">
          Game Over!
        </h1>
      </div>
    </AnimatedView>
  );
};

export default GameOverView;
