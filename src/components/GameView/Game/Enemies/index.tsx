import { IEnemy } from "../../../../store/enemies/types";
import { StateType } from "../../../../store/types";
import Enemy from "./Enemy";
import { FC } from "react";
import { useSelector } from "react-redux";

const Enemies: FC = () => {
  const enemies: IEnemy[] = useSelector(
    (state: StateType) => state.enemies.enemies
  );

  return (
    <>
      {enemies.map((enemy: IEnemy) => (
        <Enemy
          key={enemy.id}
          id={enemy.id}
          angle={enemy.angle}
          distance={enemy.distance}
          type={enemy.type}
          score={enemy.score}
          alive={enemy.alive}
        />
      ))}
    </>
  );
};

export default Enemies;
