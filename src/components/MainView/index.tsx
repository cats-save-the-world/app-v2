import { FC } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth";
import { setView } from "../../store/router";
import { ViewEnum } from "../../store/router/types";
import AnimatedView from "../shared/AnimatedView";
import Button from "../shared/Button";

const MainView: FC = () => {
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(setView(ViewEnum.GAME));
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setView(ViewEnum.AUTH_USERNAME));
  };

  return (
    <AnimatedView className="grow flex flex-col justify-center">
      <div className="mx-auto max-w-[390px] w-[390px] px-4 flex flex-col space-y-12">
        <h1 className="text-center text-3xl text-yellow-400 text-pixel">
          Cats, Save the World
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <Button primary onClick={handlePlay}>
            play
          </Button>
          <Button onClick={handleLogout}>log out</Button>
        </div>
      </div>
    </AnimatedView>
  );
};

export default MainView;
