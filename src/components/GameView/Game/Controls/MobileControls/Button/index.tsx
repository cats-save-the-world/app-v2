import style from "./style.module.css";
import classNames from "classnames";
import { FC } from "react";

interface IProps {
  onTouchStart: () => void;
  onTouchEnd: () => void;
  left?: boolean;
}

const Button: FC<IProps> = ({ onTouchStart, onTouchEnd, left }) => (
  <button
    className={classNames(style.button, {
      [style.left]: left,
    })}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
  ></button>
);

export default Button;
