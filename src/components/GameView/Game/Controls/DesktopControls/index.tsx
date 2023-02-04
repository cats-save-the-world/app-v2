import { FC, useEffect } from "react";

interface IProps {
  handleLeft: () => void;
  handleRight: () => void;
  handleStop: () => void;
}

const DesktopControls: FC<IProps> = ({
  handleLeft,
  handleRight,
  handleStop,
}) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "a":
        handleLeft();
        break;
      case "d":
        handleRight();
        break;
    }
  };

  useEffect(() => {
    if (!window) return;

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleStop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleStop);
    };
  }, [window]);

  return null;
};

export default DesktopControls;
