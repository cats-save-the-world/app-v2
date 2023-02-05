import { IIndicator } from "../../../../store/indicators/types";
import { StateType } from "../../../../store/types";
import Indicator from "./Indicator";
import { FC } from "react";
import { useSelector } from "react-redux";

const Indicators: FC = () => {
  const indicators = useSelector(
    (state: StateType) => state.indicators.indicators
  );

  return (
    <>
      {indicators.map((indicator: IIndicator) => (
        <Indicator
          key={indicator.id}
          id={indicator.id}
          label={indicator.label}
          x={indicator.x}
          y={indicator.y}
        />
      ))}
    </>
  );
};

export default Indicators;
