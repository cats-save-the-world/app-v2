import { IState } from "../../../../store/planet/types";
import { StateType } from "../../../../store/types";
import DamageIndicator from "./DamageIndicator";
import style from "./style.module.css";
import { FC } from "react";
import { useSelector } from "react-redux";

const Planet: FC = () => {
  const planet: IState = useSelector((state: StateType) => state.planet);

  return (
    <div className={style.planet}>
      <DamageIndicator value={planet.damage} prevValue={planet.prevDamage} />
    </div>
  );
};

export default Planet;
