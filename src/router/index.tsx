import { createBrowserRouter } from "react-router-dom";
import GameView from "../components/GameView";
import IndexView from "../components/IndexView";
import NewGameView from "../components/NewGameView";

const router = createBrowserRouter([
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
]);

export default router;
