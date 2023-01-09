import { FC } from "react";
import style from "./style.module.css";

interface IProps {
  angle: number;
  distance: number;
}

const Enemy: FC<IProps> = ({ angle, distance }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div
        className="transition-[padding]"
        style={{
          transform: `rotate(${angle}deg)`,
          paddingBottom: `${distance}px`,
        }}
      >
        <div className={style.enemy}></div>
      </div>
    </div>
  );
};

export default Enemy;
