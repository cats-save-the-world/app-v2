import { FC } from "react";
import classNames from "classnames";
import style from "./style.module.css";

interface IProps {
  angle: number;
  distance: number;
  type: string;
}

const Enemy: FC<IProps> = ({ angle, distance, type }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div
        className="transition-[padding,transform] duration-300"
        style={{
          transform: `rotate(${angle}deg)`,
          paddingBottom: `${distance}px`,
        }}
      >
        <div className={classNames(style.enemy, style[type])}></div>
      </div>
    </div>
  );
};

export default Enemy;
