import { FC, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import { createGame } from "./utils";
import { useSelector } from "react-redux";
import { StateType } from "../../store/types";
import { useNavigate } from "react-router-dom";

const GameCreateView: FC = () => {
  const navigate = useNavigate();
  const credentials = useSelector((state: StateType) => state.auth.credentials);

  useEffect(() => {
    createGame(credentials).then((gameId: string) => {
      navigate(`/game/${gameId}`);
    });
  }, []);

  return (
    <div className="grow flex flex-col justify-center">
      <AnimatedText />
    </div>
  );
};

export default GameCreateView;
