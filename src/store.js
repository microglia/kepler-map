import { configureStore } from "@reduxjs/toolkit";
import { keplerGlReducer } from "kepler.gl";

export const store = configureStore({
  reducer: {
    keplerGl: keplerGlReducer,
  },
});