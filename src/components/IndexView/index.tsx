import { FC } from "react";
import classNames from "classnames";
import style from "./style.module.css";
import Menu from "./Menu";

const IndexView: FC = () => {
  return (
    <div className="grow flex flex-col justify-center space-y-12">
      <h1
        className={classNames(
          "text-center text-3xl text-yellow-400 tracking-widest font-bold",
          style.title
        )}
      >
        Cats, Save the World
      </h1>
      <Menu />
    </div>
  );
};

export default IndexView;
