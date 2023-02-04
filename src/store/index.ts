import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import cat from "./cat";
import enemies from "./enemies";
import planet from "./planet";
import enemyScores from "./enemyScores";
import game from "./game";
import router from "./router";

const store = configureStore({
  reducer: {
    auth,
    cat,
    enemies,
    planet,
    enemyScores,
    game,
    router,
  },
});

export default store;
