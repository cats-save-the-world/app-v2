import { FC, useEffect } from "react";
import Button from "./Button";
import { ControlActionEnum } from "./types";
import { GameEventTypeEnum } from "../types";

interface IProps {
  websocket: WebSocket;
}

const Controls: FC<IProps> = ({ websocket }) => {
  const sendWebsocketEvent = (controlAction: ControlActionEnum) => {
    if (websocket.readyState !== WebSocket.OPEN) return;

    const payload = { type: GameEventTypeEnum.CONTROL, payload: controlAction };
    websocket.send(JSON.stringify(payload));
  };

  const handleLeft = () => {
    sendWebsocketEvent(ControlActionEnum.left);
  };

  const handleRight = () => {
    sendWebsocketEvent(ControlActionEnum.right);
  };

  const handleStop = () => {
    sendWebsocketEvent(ControlActionEnum.stop);
  };

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

  return (
    <div className="fixed pb-4 px-4 h-[140px] bottom-0 left-0 right-0 grid grid-cols-2 gap-4">
      <Button onTouchStart={handleLeft} onTouchEnd={handleStop} left />
      <Button onTouchStart={handleRight} onTouchEnd={handleStop} />
    </div>
  );
};

export default Controls;
