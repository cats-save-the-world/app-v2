import { FC } from "react";
import classNames from "classnames";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { StateType } from "../../../../store/types";
import { CatStatusEnum, CatDirectionEnum } from "../../../../store/cat/types";

const Cat: FC = () => {
  const { angle, status, direction } = useSelector(
    (state: StateType) => state.cat
  );

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div
        className="pb-[165px] transition-transform"
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        <div
          className={classNames(style.cat, {
            [style.running]: status === CatStatusEnum.RUNNING,
            [style.hitting]: status === CatStatusEnum.HITTING,
            [style.left]: direction === CatDirectionEnum.LEFT,
          })}
        ></div>
      </div>
    </div>
  );
};

export default Cat;
