import { FC, useEffect, useState } from "react";
import classNames from "classnames";
import style from "./style.module.css";

const INTERVAL = 200;

const AnimatedText: FC = () => {
  const [dots, setDots] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots: number) => (prevDots === 3 ? 0 : prevDots + 1));
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={classNames("text-center text-xl tracking-widest", style.text)}>
      Loading{".".repeat(dots)}
    </span>
  );
};

export default AnimatedText;
