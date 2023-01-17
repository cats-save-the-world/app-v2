import { FC } from "react";
import classNames from "classnames";
import style from "./style.module.css";

interface IProps {
  children: string;
  onClick?: () => void;
  primary?: boolean;
}

const Button: FC<IProps> = ({ children, onClick, primary }) => {
  return (
    <button
      className={classNames("p-2 tracking-widest capitalize", style.button, {
        "text-yellow-400 text-lg": primary,
        "text-white text-xs": !primary,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
