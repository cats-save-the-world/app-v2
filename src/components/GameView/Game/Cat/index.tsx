import { CatStatusEnum, CatDirectionEnum } from "../../../../store/cat/types";
import { StateType } from "../../../../store/types";
import style from "./style.module.css";
import classNames from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

const Cat: FC = () => {
  const { angle, status, direction, skin } = useSelector(
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
          className={classNames(style.cat, style[skin], {
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
