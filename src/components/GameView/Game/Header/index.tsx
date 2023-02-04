import { StateType } from "../../../../store/types";
import { FC } from "react";
import { useSelector } from "react-redux";

const Header: FC = () => {
  const score = useSelector((state: StateType) => state.game.score);

  return (
    <div className="mx-auto max-w-[390px] w-[390px] p-4 flex justify-end">
      <span className="text-white text-xs">Score: {score}</span>
    </div>
  );
};

export default Header;
