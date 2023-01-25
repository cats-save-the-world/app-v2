import { FC, useEffect, useRef } from "react";
import classNames from "classnames";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { addEnemyScore } from "../../../../../store/enemyScores";

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
    if (!alive && ref.current) {
      const coordinates = ref.current.getBoundingClientRect();
      dispatch(
        addEnemyScore({ id, score, x: coordinates.x, y: coordinates.y })
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
