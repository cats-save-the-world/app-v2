import style from "./style.module.css";
import classNames from "classnames";
import { FC } from "react";

interface IProps {
  value: number;
  blinking: boolean;
}

const SIZE = 120;
const STROKE_WIDTH = 15;

const Circle: FC<IProps> = ({ value, blinking }) => {
  const center = SIZE / 2;
  const radius = center - STROKE_WIDTH;
  const strokeDasharray = 2 * Math.PI * radius;
  const strokeDashoffset = strokeDasharray * (1 - value);

  return (
    <svg className={style.svg} width={SIZE} height={SIZE}>
      <circle
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={STROKE_WIDTH}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        className={classNames(style.circle, {
          [style.blinking]: blinking,
        })}
      ></circle>
    </svg>
  );
};

export default Circle;
