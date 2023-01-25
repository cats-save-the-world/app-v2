import { FC, useEffect, useState } from "react";
import { animate } from "framer-motion";
import { useDispatch } from "react-redux";
import { removeEnemyScore } from "../../../../../store/enemyScores";

interface IProps {
  id: string;
  score: number;
  x: number;
  y: number;
}

const EnemyScore: FC<IProps> = ({ id, score, x, y }) => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    animate(0, 20, {
      duration: 0.6,
      ease: "linear",
      onUpdate(latest: number) {
        setOffset(Math.trunc(latest));
      },
      onComplete() {
        dispatch(removeEnemyScore(id));
      },
    });
  }, []);

  return (
    <div
      className="text-[6px] text-white fixed transition-150"
      style={{
        top: `${y - offset}px`,
        left: `${x}px`,
      }}
    >
      {score}
    </div>
  );
};

export default EnemyScore;
