import { createHashRouter } from "react-router-dom";
import GameView from "../components/GameView";
import IndexView from "../components/IndexView";
import NewGameView from "../components/NewGameView";
import LayoutView from "../components/shared/LayoutView";

const router = createHashRouter([
  {
    path: "/",
    element: <LayoutView />,
    children: [
      {
        path: "/",
        element: <IndexView />,
      },
      {
        path: "/new",
        element: <NewGameView />,
      },
      {
        path: "/:gameId",
        element: <GameView />,
      },
    ],
  },
]);

export default router;
