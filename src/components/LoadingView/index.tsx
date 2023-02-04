import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../../store/router";
import { ViewEnum } from "../../store/router/types";
import AnimatedView from "../shared/AnimatedView";
import { StateType } from "../../store/types";
import { verify } from "../../api";
import { logout } from "../../store/auth";

const LoadingView: FC = () => {
  const dispatch = useDispatch();
  const credentials = useSelector((state: StateType) => state.auth.credentials);

  useEffect(() => {
    if (credentials === null) {
      dispatch(setView(ViewEnum.AUTH_USERNAME));
      return;
    }

    verify(credentials.username, credentials.password)
      .then(() => {
        dispatch(setView(ViewEnum.MAIN));
      })
      .catch(() => {
        dispatch(logout());
        dispatch(setView(ViewEnum.AUTH_USERNAME));
      });
  }, [credentials]);

  return (
    <AnimatedView className="grow flex flex-col justify-center">
      <span className="text-pixel text-yellow-400 text-sm text-center animate-bounce">
        loading...
      </span>
    </AnimatedView>
  );
};

export default LoadingView;
