import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import cat from "./cat";
import enemies from "./enemies";
import planet from "./planet";
import enemyScores from "./enemyScores";

const store = configureStore({
  reducer: {
    auth,
    cat,
    enemies,
    planet,
    enemyScores,
  },
});

export default store;
