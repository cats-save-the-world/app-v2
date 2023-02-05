import { removeIndicator } from "../../../../../store/indicators";
import { animate } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface IProps {
  id: string;
  label: number;
  x: number;
  y: number;
}

const Indicator: FC<IProps> = ({ id, label, x, y }) => {
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
        dispatch(removeIndicator(id));
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
      {label}
    </div>
  );
};

export default Indicator;
