import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createGuestGame, createGame } from "../../api";
import { useSelector } from "react-redux";
import { StateType } from "../../store/types";

const NewGameView: FC = () => {
  const navigate = useNavigate();
  const credentials = useSelector((state: StateType) => state.auth.credentials);

  const handleGameCreate = (gameId: number) => {
    navigate(`/${gameId}`);
  };

  useEffect(() => {
    if (credentials) {
      createGame(credentials).then(handleGameCreate);
    } else {
      createGuestGame().then(handleGameCreate);
    }
  }, []);

  return (
    <div className="grow flex flex-col justify-center">
      <h2 className="text-pixel text-yellow-400 text-sm text-center">
        loading...
      </h2>
    </div>
  );
};

export default NewGameView;
