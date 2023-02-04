import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { useSelector } from "react-redux";
import { ViewEnum } from "../../store/router/types";
import { StateType } from "../../store/types";
import AuthLoginView from "../AuthLoginView";
import AuthRegisterView from "../AuthRegisterView";
import AuthUsernameView from "../AuthUsernameView";
import LoadingView from "../LoadingView";
import MainView from "../MainView";
import style from "./style.module.css";
import GameView from "../GameView";

const Layout: FC = () => {
  const view = useSelector((state: StateType) => state.router.view);
  let viewElement;

  if (view === ViewEnum.LOADING) viewElement = <LoadingView />;
  else if (view === ViewEnum.AUTH_USERNAME) viewElement = <AuthUsernameView />;
  else if (view === ViewEnum.AUTH_REGISTER) viewElement = <AuthRegisterView />;
  else if (view === ViewEnum.AUTH_LOGIN) viewElement = <AuthLoginView />;
  else if (view === ViewEnum.MAIN) viewElement = <MainView />;
  else if (view === ViewEnum.GAME) viewElement = <GameView />;

  return (
    <div className={style.layout}>
      <AnimatePresence>{viewElement}</AnimatePresence>
    </div>
  );
};

export default Layout;
