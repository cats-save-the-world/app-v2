import { FC, useEffect, useState } from "react";
import Circle from "./Circle";

interface IProps {
  value: number;
  prevValue: number | null;
}

const BLINKING_DURATION = 1200;

const DamageIndicator: FC<IProps> = ({ value, prevValue }) => {
  const [blinking, setBlinking] = useState<boolean>(false);

  useEffect(() => {
    if (!prevValue || prevValue !== value) return;

    setBlinking(true);

    const timeoutId = setTimeout(() => {
      setBlinking(false);
    }, BLINKING_DURATION);

    return () => clearTimeout(timeoutId);
  }, [value, prevValue]);

  return <Circle value={value} blinking={blinking} />;
};

export default DamageIndicator;
