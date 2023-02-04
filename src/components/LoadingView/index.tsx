import classNames from "classnames";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../../api";
import { logout } from "../../store/auth";
import { setView } from "../../store/router";
import { ViewEnum } from "../../store/router/types";
import { StateType } from "../../store/types";
import AnimatedView from "../shared/AnimatedView";
import style from "./style.module.css";
import { sleep } from "../../utils";

const LoadingView: FC = () => {
  const dispatch = useDispatch();
  const credentials = useSelector((state: StateType) => state.auth.credentials);

  useEffect(() => {
    if (credentials === null) {
      dispatch(setView(ViewEnum.AUTH_USERNAME));
      return;
    }

    Promise.all([
      verify(credentials.username, credentials.password),
      sleep(3000),
    ])
      .then(() => {
        dispatch(setView(ViewEnum.MAIN));
      })
      .catch(() => {
        dispatch(logout());
        dispatch(setView(ViewEnum.AUTH_USERNAME));
      });
  }, [credentials]);

  return (
    <AnimatedView className="grow flex flex-col justify-center items-center">
      <div className={classNames("h-[100px] w-[100px]", style.spinner)}></div>
      <span className="text-pixel text-yellow-400 text-sm animate-bounce">
        loading
      </span>
    </AnimatedView>
  );
};

export default LoadingView;
