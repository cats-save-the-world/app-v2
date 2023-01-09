import { FC } from "react";
import style from "./style.module.css";
import DamageIndicator from "./DamageIndicator";
import { StateType } from "../../../store/types";
import { useSelector } from "react-redux";
import { IState } from "../../../store/planet/types";

const Planet: FC = () => {
  const planet: IState = useSelector((state: StateType) => state.planet);

  return (
    <div className={style.planet}>
      {planet.damage > 0 && (
        <DamageIndicator value={planet.damage} prevValue={planet.prevDamage} />
      )}
    </div>
  );
};

export default Planet;
