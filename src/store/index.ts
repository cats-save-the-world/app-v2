import auth from "./auth";
import cat from "./cat";
import enemies from "./enemies";
import enemyScores from "./enemyScores";
import game from "./game";
import planet from "./planet";
import router from "./router";
import { configureStore } from "@reduxjs/toolkit";

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
