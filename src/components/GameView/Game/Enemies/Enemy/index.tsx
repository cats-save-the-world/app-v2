import { EnemyTypeEnum } from "../../../../../store/enemies/types";
import { addIndicator } from "../../../../../store/indicators";
import style from "./style.module.css";
import classNames from "classnames";
import { FC, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

interface IProps {
  id: string;
  angle: number;
  distance: number;
  type: string;
  score: number;
  alive: boolean;
}

const Enemy: FC<IProps> = ({ id, angle, distance, type, score, alive }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!alive && ref.current && type !== EnemyTypeEnum.HEALING) {
      const coordinates = ref.current.getBoundingClientRect();
      dispatch(
        addIndicator({ id, label: score, x: coordinates.x, y: coordinates.y })
      );
    }
  }, [alive]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div
        className="transition-[padding,transform] duration-300"
        style={{
          transform: `rotate(${angle}deg)`,
          paddingBottom: `${distance}px`,
        }}
      >
        <div
          ref={ref}
          className={classNames(style.enemy, style[type], {
            [style.alive]: alive,
          })}
        ></div>
      </div>
    </div>
  );
};

export default Enemy;
