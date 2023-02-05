import auth from "./auth";
import cat from "./cat";
import enemies from "./enemies";
import game from "./game";
import indicators from "./indicators";
import planet from "./planet";
import router from "./router";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth,
    cat,
    enemies,
    planet,
    indicators,
    game,
    router,
  },
});

export default store;
