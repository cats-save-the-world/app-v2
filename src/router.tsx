import { createBrowserRouter } from "react-router-dom";
import IndexView from "./components/IndexView";
import GameCreateView from "./components/GameCreateView";
import GameView from "./components/GameView";
import AuthView from "./components/AuthView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexView />,
  },
  {
    path: "/auth",
    element: <AuthView />,
  },
  // {
  //   path: "/game/new",
  //   element: <GameCreateView />,
  // },
  // {
  //   path: "/game/:gameId",
  //   element: <GameView />,
  // },
]);

export default router;
