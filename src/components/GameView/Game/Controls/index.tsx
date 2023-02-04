import { GameEventTypeEnum } from "../types";
import DesktopControls from "./DesktopControls";
import MobileControls from "./MobileControls";
import { ControlActionEnum } from "./types";
import { FC } from "react";
import { isMobile } from "react-device-detect";

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

  return (
    <>
      {isMobile ? (
        <MobileControls
          handleLeft={handleLeft}
          handleRight={handleRight}
          handleStop={handleStop}
        />
      ) : (
        <DesktopControls
          handleLeft={handleLeft}
          handleRight={handleRight}
          handleStop={handleStop}
        />
      )}
    </>
  );
};

export default Controls;
