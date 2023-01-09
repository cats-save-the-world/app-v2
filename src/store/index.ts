import { configureStore } from "@reduxjs/toolkit";
import cat from "./cat";
import enemies from "./enemies";
import planet from "./planet";

const store = configureStore({
  reducer: { cat, enemies, planet },
});

export default store;
