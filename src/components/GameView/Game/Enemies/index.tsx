import { FC } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../../store/types";
import { IEnemy } from "../../../../store/enemies/types";
import Enemy from "./Enemy";

const Enemies: FC = () => {
  const enemies: IEnemy[] = useSelector(
    (state: StateType) => state.enemies.enemies
  );

  return (
    <>
      {enemies.map((enemy: IEnemy) => (
        <Enemy
          key={enemy.id}
          angle={enemy.angle}
          distance={enemy.distance}
          type={enemy.type}
        />
      ))}
    </>
  );
};

export default Enemies;
