import Button from "./Button";
import { FC } from "react";

interface IProps {
  handleLeft: () => void;
  handleRight: () => void;
  handleStop: () => void;
}

const MobileControls: FC<IProps> = ({
  handleLeft,
  handleRight,
  handleStop,
}) => {
  return (
    <div className="fixed pb-4 px-4 h-[140px] bottom-0 left-0 right-0 grid grid-cols-2 gap-4">
      <Button onTouchStart={handleLeft} onTouchEnd={handleStop} left />
      <Button onTouchStart={handleRight} onTouchEnd={handleStop} />
    </div>
  );
};

export default MobileControls;
