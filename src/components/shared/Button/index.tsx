import style from "./style.module.css";
import classNames from "classnames";
import { FC } from "react";

interface IProps {
  children: string;
  onClick?: () => void;
  primary?: boolean;
  disabled?: boolean;
}

const Button: FC<IProps> = ({ children, onClick, primary, disabled }) => {
  return (
    <button
      className={classNames("p-2 text-pixel", style.button, {
        "text-yellow-400 text-lg": primary,
        "text-white text-xs": !primary,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children} &gt;
    </button>
  );
};

export default Button;
