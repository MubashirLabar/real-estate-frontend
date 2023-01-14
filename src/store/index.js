import { configureStore } from "@reduxjs/toolkit";
import openaiService from "./services/openaiService";

const Store = configureStore({
  reducer: {
    [openaiService.reducerPath]: openaiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([openaiService.middleware]),
});

export default Store;
