import { FC, useEffect, useState } from "react";
import style from "./style.module.css";
import classNames from "classnames";
import { Outlet, useMatch } from "react-router-dom";
import Planet from "./Planet";
import Cat from "./Cat";

const LayoutView: FC = () => {
  const [inGame, setInGame] = useState<boolean>(false);
  const match = useMatch("/:gameId");

  useEffect(() => {
    setInGame(!!match && match.pathname !== "/new");
  }, [match]);

  return (
    <div className={style.layout}>
      <div className="mx-auto max-w-[390px] w-[390px] h-full">
        <div className="-z-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <div
            className={classNames(style.wrapper, {
              [style.inGame]: inGame,
            })}
          >
            <Planet />
            <Cat />
          </div>
        </div>
        <div className="z-10 h-full flex flex-col py-8 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutView;
