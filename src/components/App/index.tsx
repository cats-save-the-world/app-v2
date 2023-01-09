import { useEffect, useState } from "react";
import Layout from "./Layout";
import Game from "../Game";
import { createGame } from "./helpers";

const App = () => {
  const [gameId, setGameId] = useState<string | null>(null);

  useEffect(() => {
    createGame().then((gameId: string) => {
      setGameId(gameId);
    });
  }, []);

  return <Layout>{!!gameId && <Game gameId={gameId} />}</Layout>;
};

export default App;
