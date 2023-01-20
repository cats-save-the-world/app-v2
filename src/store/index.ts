import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import cat from "./cat";
import enemies from "./enemies";
import planet from "./planet";

const store = configureStore({
  reducer: { auth, cat, enemies, planet },
});

export default store;
