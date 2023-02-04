import { IEnemyScore } from "../../../../store/enemyScores/types";
import { StateType } from "../../../../store/types";
import EnemyScore from "./EnemyScore";
import { FC } from "react";
import { useSelector } from "react-redux";

const EnemyScores: FC = () => {
  const enemyScores = useSelector(
    (state: StateType) => state.enemyScores.scores
  );

  return (
    <>
      {enemyScores.map((enemyScore: IEnemyScore) => (
        <EnemyScore
          key={enemyScore.id}
          id={enemyScore.id}
          score={enemyScore.score}
          x={enemyScore.x}
          y={enemyScore.y}
        />
      ))}
    </>
  );
};

export default EnemyScores;
